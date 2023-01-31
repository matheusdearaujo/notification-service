import { Notification } from "@/domain/entities/notification";

export class CreateNotificationResponseDTO {
  notification: {
    id: Notification["id"];
    content: Notification["content"]["value"];
    category: Notification["category"];
    recipientId: Notification["recipientId"];
  };
}
