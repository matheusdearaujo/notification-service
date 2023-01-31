import { randomUUID } from "node:crypto";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications.repository";
import { Notification } from "@/domain/entities/notification";
import { NotificationContent } from "@/domain/entities/value-objects/notification-content";
import { CancelNotification } from "./cancel-notification";

describe("Cancel Notification", () => {
  it("should be able to cancel a notification", async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      content: new NotificationContent("This is a notification"),
      category: "Social",
      recipientId: randomUUID(),
    });

    await notificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });
});
