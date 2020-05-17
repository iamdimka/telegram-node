export default class TelegramError extends Error {
  code?: number;

  static is(e: any): e is TelegramError {
    return e instanceof TelegramError;
  }

  constructor(data: { error_code?: number, description: string; }) {
    super(data.description);
    this.code = data.error_code;
  }
}