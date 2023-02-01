import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications.repository";
import { makeNotification } from "@test/factories/notification.factory";
import { CountRecipientNotifications } from "./count-recipient-notifications";

describe("Count Recipient Notifications", () => {
  it("should be able to count many recipient notifications", async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: "e6b98486-42db-4fcc-a214-0d047578d1c8",
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: "e6b98486-42db-4fcc-a214-0d047578d1c8",
      }),
    );

    await notificationsRepository.create(makeNotification());

    const { count } = await countRecipientNotifications.execute({
      recipientId: "e6b98486-42db-4fcc-a214-0d047578d1c8",
    });

    expect(count).toEqual(2);
  });
});
