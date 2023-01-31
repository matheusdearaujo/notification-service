import { Injectable } from "@nestjs/common";
import { Notification } from "@/domain/entities/notification";
import { NotificationContent } from "@/domain/entities/value-objects/notification-content";
import { SendNotificationUseCase } from "@/domain/use-cases/send-notification";
import { NotificationsRepository } from "../repositories/notifications.repository";
import {
  SendNotificationRequestDTO,
  SendNotificationResponseDTO,
} from "../dtos";

@Injectable()
export class SendNotification implements SendNotificationUseCase {
  constructor(private _notificationsRepository: NotificationsRepository) {}

  async execute(
    data: SendNotificationRequestDTO,
  ): Promise<SendNotificationResponseDTO> {
    const { recipientId, content, category } = data;

    const notification = new Notification({
      recipientId,
      content: new NotificationContent(content),
      category,
    });

    await this._notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
