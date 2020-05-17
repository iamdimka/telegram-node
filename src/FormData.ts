import { randomBytes, randomFillSync } from "crypto";
import { createReadStream, readFile } from "fs";
let buffer: Buffer | undefined = undefined;

export default class FormData {
  protected payload: string[] = [""];

  append(key: string, value: boolean | string | number) {
    this.payload.push(`Content-Disposition: form-data; name="${key}"\r\n\r\n${value}`);
    return this;
  }

  appendFile(key: string, buffer: Buffer, meta?: { filename?: string, contentType?: string; }) {
    let entry = `Content-Disposition: form-data; name="${key}"`;
    if (meta) {
      if (meta.filename) {
        entry += `; filename="${meta.filename}"`;
      }

      if (meta.contentType) {
        entry += `\r\nContent-Type: ${meta.contentType}`;
      }
    }

    const b = buffer.toString("binary");
    this.payload.push(`${entry}\r\n\r\n${b}`);
    return this;
  }

  async appendFileRead(key: string, path: string, meta?: { filename?: string, contentType?: string; }): Promise<void> {
    const buffer = await new Promise<Buffer>((resolve, reject) => {
      readFile(path, (err, data) => err ? reject(err) : resolve(data!));
    });

    this.appendFile(key, buffer, meta);
  }

  data() {
    if (buffer) {
      randomFillSync(buffer);
    } else {
      buffer = randomBytes(24);
    }

    const boundary = buffer.toString("hex");

    return {
      contentType: `multipart/form-data; boundary=${boundary}`,
      body: this.payload.join(`\r\n--${boundary}\r\n`) + `\r\n--${boundary}--\r\n`
    };
  }
}