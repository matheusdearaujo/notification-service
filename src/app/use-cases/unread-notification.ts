import { Injectable } from "@nestjs/common";
import { UnreadNotificationUseCase } from "@/domain/use-cases/unread-notification";
import { NotificationsRepository } from "../repositories/notifications.repository";
import { NotificationNotFound } from "../helpers/errors/notification-not-found";
import { UnreadNotificationRequestDTO } from "../dtos";

@Injectable()
export class UnreadNotification implements UnreadNotificationUseCase {
  constructor(private _notificationsRepository: NotificationsRepository) {}

  async execute(data: UnreadNotificationRequestDTO): Promise<void> {
    const { notificationId } = data;

    const notification = await this._notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this._notificationsRepository.save(notification);
  }
}
