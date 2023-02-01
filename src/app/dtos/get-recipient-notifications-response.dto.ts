import { Notification } from "@/domain/entities/notification";

export interface GetRecipientNotificationsResponseDTO {
  notifications: Notification[];
}
