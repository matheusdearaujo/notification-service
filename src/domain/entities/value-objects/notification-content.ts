export class NotificationContent {
  private readonly _content: string;

  get value(): string {
    return this._content;
  }

  private _validateNotificationContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 255;
  }

  constructor(content: string) {
    const isNotificationContentLengthValid =
      this._validateNotificationContentLength(content);

    if (!isNotificationContentLengthValid) {
      throw new Error("NotificationContent length is invalid.");
    }

    this._content = content;
  }
}
