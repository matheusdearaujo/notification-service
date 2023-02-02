import { randomUUID } from "node:crypto";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications.repository";
import { makeNotification } from "@test/factories/notification.factory";
import { CancelNotification } from "./cancel-notification";
import { NotificationNotFound } from "../helpers/errors/notification-not-found";

describe("Cancel Notification", () => {
  it("should be able to cancel a notification", async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it("should not be able to cancel a notification when it does not exist", async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(async () => {
      return await cancelNotification.execute({
        notificationId: randomUUID(),
      });
    }).rejects.toThrow(NotificationNotFound);
  });

  it("should not be able to read a notification when it has been readed", async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = makeNotification({ readAt: new Date() });

    await notificationsRepository.create(notification);

    expect(async () => {
      return await cancelNotification.execute({
        notificationId: notification.id,
      });
    }).rejects.toThrow("This notification has been readed.");
  });
});
