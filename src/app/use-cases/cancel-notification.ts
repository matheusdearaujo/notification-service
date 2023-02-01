import { Injectable } from "@nestjs/common";
import { CancelNotificationUseCase } from "@/domain/use-cases/cancel-notification";
import { NotificationsRepository } from "../repositories/notifications.repository";
import { NotificationNotFound } from "../helpers/errors/notification-not-found";
import { CancelNotificationRequestDTO } from "../dtos";

@Injectable()
export class CancelNotification implements CancelNotificationUseCase {
  constructor(private _notificationsRepository: NotificationsRepository) {}

  async execute(data: CancelNotificationRequestDTO): Promise<void> {
    const { notificationId } = data;

    const notification = await this._notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    if (notification.readAt) {
      throw new Error("This notification has been readed.");
    }

    notification.cancel();

    await this._notificationsRepository.save(notification);
  }
}
