import { get } from "https";
import * as cheerio from "cheerio";
import { writeFileSync } from "fs";

export async function loadModels() {
  const url = "https://core.telegram.org/bots/api";

  const $ = await new Promise<CheerioStatic>((resolve, reject) => {
    get(url, res => {
      if (res.statusCode !== 200) {
        reject(new Error(`Status code: ${res.statusCode}. ${res.statusMessage}`));
      }

      const chunks: Buffer[] = [];
      res.on("data", chunks.push.bind(chunks))
        .on("end", () => {
          try {

            resolve(cheerio.load(Buffer.concat(chunks)));
          } catch (e) {
            reject(e);
          }
        });
    }).on("error", reject).end();
  });

  function rewriteType(type: string): string {
    const idx = type.lastIndexOf("Array of ");
    if (idx >= 0) {
      return rewriteType(type.substring(0, idx) + `Array<${rewriteType(type.substring(idx + 9))}>`);
    }

    if (type.includes(" or ")) {
      return type.split(" or ").map(rewriteType).join(" | ");
    }

    if (type.includes(" and ")) {
      return type.split(" and ").map(rewriteType).join(" | ");
    }

    switch (type) {
      case "Integer":
      case "Float":
      case "Float number":
      case "Int":
        return "number";
      case "String":
      case "True":
      case "False":
      case "Boolean":
        return type.toLowerCase();
      case "InputFile":
      case "CallbackGame":
        return "any";
      default:
        return type;
    }
  }

  const types = new Set<string>();

  function typesMatched(rx: RegExp): string {
    return [...types].filter(item => rx.test(item)).join(" | ") || "any";
  }

  const items = $("table.table").toArray().map(node => {
    let title = "";
    let description;
    let url;

    let n = node;
    while (n.previousSibling) {
      if (n.tagName === "p") {
        description = $(n).text().trim();
      } else if (n.tagName === "h4") {
        url = $("a", n).attr("href")?.trim();
        title = $(n).text().trim();
        break;
      }

      n = n.previousSibling;
    }

    types.add(title);

    return {
      title,
      description,
      url,
      isMethod: title[0].toLowerCase() === title[0],
      fields: $("tbody tr", node).toArray().map(el => {
        const $td = $("td", el);
        const description = $td.last().text().trim().replace(/^Optional\s*.\s*/i, "");

        return {
          name: $td.eq(0).text(),
          type: rewriteType($td.eq(1).text()),
          optional: $td.length > 3 ? $td.eq(2).text() !== "Yes" : /optional\./i.test(description),
          description
        };
      })
    };
  });

  const returnPatterns = [
    /returns\s+(?:a|an|the\s+)?(.+?)\s+on\s+success/i,
    /on\s+success,\s+(.+?)is\s+returned/i,
    /\.(.+?)is\s+returned/i,
    /returns\s+(.+?)\./i
  ];

  function writeResponse(description?: string): string | undefined {
    if (!description) {
      return;
    }

    description = description.replace(/\b(a|an|the)\b/gi, "").replace(/array/g, "Array");

    for (const pattern of returnPatterns) {
      if (pattern.test(description)) {
        const match = RegExp.$1.trim().split(/,?\s/).filter(item => {
          if (!item) {
            return false;
          }

          if (/[A-Z]/.test(item[0])) {
            return true;
          }

          switch (item) {
            case "of":
            case "or":
            case "and":
            case "otherwise":
              return true;

            default:
              return false;
          }
        }).map(item => {
          switch (item) {
            case "Messages": return "Message";
            case "otherwise": return "or";
            default: return item;
          }
        }).join(" ");

        return `response: ${rewriteType(match)};`;
      }
    }
  }

  const doc = [
    `type InputMedia = ${typesMatched(/^InputMedia/)};`,
    `type InputMessageContent = ${typesMatched(/^Input(.+)MessageContent$/)};`,
    `type PassportElementError = ${typesMatched(/^PassportElementError/)};`,
    `type InlineQueryResult = ${typesMatched(/^InlineQueryResult/)}`,

    pad(
      items.filter(item => !item.isMethod).map(item => [
        item.description && `/**\n * ${item.description}\n * @url ${url + item.url}\n */`,
        `export interface ${item.title} {`,
        ...item.fields.map(field => [
          `  /** ${field.description} */`,
          `  ${field.name}${field.optional ? "?" : ""}: ${field.type};`
        ].join("\n")),
        `}`
      ])
    ),

    "export interface API {",
    pad(
      items.filter(item => item.isMethod).map(item => [
        "/**",
        ` * ${item.description}`,
        ` * @url ${url + item.url}`,
        " */",
        `"${item.title}": {`,
        [
          "request: {",
          item.fields.map(field => [
            `/** ${field.description} */`,
            `${field.name}${field.optional ? "?" : ""}: ${field.type};`
          ].join("\n")),
          "}",
          writeResponse(item.description)
        ],
        "}"
      ])
    ),
    "}"

  ].join("\n\n");

  function pad(item: string | any[], n = 2): string {
    if (Array.isArray(item)) {
      item = item.filter(item => item != null).map(item => pad(item, n)).join("\n");
    }

    return item.replace(/^/gm, " ".repeat(n));
  }

  writeFileSync(`${__dirname}/Telegram.ts`, `export default Telegram;\nnamespace Telegram {\n${doc.replace(/^/gm, "  ")}\n}`);
}

loadModels();