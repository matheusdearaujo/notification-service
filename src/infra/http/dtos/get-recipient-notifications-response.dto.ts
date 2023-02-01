import { Notification } from "@/domain/entities/notification";

interface NotificationResponse {
  id: Notification["id"];
  content: Notification["content"]["value"];
  category: Notification["category"];
  recipientId: Notification["recipientId"];
}

export class GetRecipientNotificationsResponseDTO {
  notifications: NotificationResponse[];
}
