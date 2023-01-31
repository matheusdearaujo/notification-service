import { Notification } from "@/domain/entities/notification";
import { NotificationsRepository } from "@/app/repositories/notifications.repository";

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      ({ id }) => id === notificationId,
    ) as Notification;

    return notification;
  }

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}
