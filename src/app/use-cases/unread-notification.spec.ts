import { randomUUID } from "node:crypto";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications.repository";
import { makeNotification } from "@test/factories/notification.factory";
import { UnreadNotification } from "./unread-notification";
import { NotificationNotFound } from "../helpers/errors/notification-not-found";

describe("Unread Notification", () => {
  it("should be able to unread a notification", async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({ readAt: new Date() });

    await notificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it("should not be able to unread a notification when it does not exist", async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    expect(async () => {
      return await unreadNotification.execute({
        notificationId: randomUUID(),
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
