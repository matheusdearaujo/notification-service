import { randomUUID } from "node:crypto";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications.repository";
import { makeNotification } from "@test/factories/notification.factory";
import { ReadNotification } from "./read-notification";
import { NotificationNotFound } from "../helpers/errors/notification-not-found";

describe("Read Notification", () => {
  it("should be able to read a notification", async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await readNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it("should not be able to read a notification when it does not exist", async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    expect(async () => {
      return await readNotification.execute({
        notificationId: randomUUID(),
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
