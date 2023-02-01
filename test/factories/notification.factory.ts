import { randomUUID } from "crypto";
import {
  Notification,
  NotificationProps,
} from "@/domain/entities/notification";
import { NotificationContent } from "@/domain/entities/value-objects/notification-content";

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: "Social",
    content: new NotificationContent("This is a notification"),
    recipientId: randomUUID(),
    ...override,
  });
}
