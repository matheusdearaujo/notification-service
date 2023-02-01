import { Injectable } from "@nestjs/common";
import { ReadNotificationUseCase } from "@/domain/use-cases/read-notification";
import { NotificationsRepository } from "../repositories/notifications.repository";
import { NotificationNotFound } from "../helpers/errors/notification-not-found";
import { ReadNotificationRequestDTO } from "../dtos";

@Injectable()
export class ReadNotification implements ReadNotificationUseCase {
  constructor(private _notificationsRepository: NotificationsRepository) {}

  async execute(data: ReadNotificationRequestDTO): Promise<void> {
    const { notificationId } = data;

    const notification = await this._notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    if (notification.canceledAt) {
      throw new Error("This notification has been canceled.");
    }

    notification.read();

    await this._notificationsRepository.save(notification);
  }
}
