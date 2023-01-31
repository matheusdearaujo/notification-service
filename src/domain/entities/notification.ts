import { randomUUID } from "node:crypto";
import { Replace } from "@/app/helpers/Replace";
import { NotificationContent } from "./value-objects/notification-content";

export interface NotificationProps {
  recipientId: string;
  content: NotificationContent;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private _props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this._props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this._props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this._props.recipientId;
  }

  public set content(content: NotificationContent) {
    this._props.content = content;
  }

  public get content(): NotificationContent {
    return this._props.content;
  }

  public set category(category: string) {
    this._props.category = category;
  }

  public get category(): string {
    return this._props.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this._props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this._props.readAt;
  }

  public cancel() {
    this._props.canceledAt = new Date();
  }

  public get canceledAt(): Date | null | undefined {
    return this._props.canceledAt;
  }

  public get createdAt(): Date {
    return this._props.createdAt;
  }
}
