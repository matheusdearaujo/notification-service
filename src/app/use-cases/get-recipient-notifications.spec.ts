import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications.repository";
import { makeNotification } from "@test/factories/notification.factory";
import { GetRecipientNotifications } from "./get-recipient-notifications";

describe("Get Recipient Notifications", () => {
  it("should be able to get many recipient notifications", async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: "e6b98486-42db-4fcc-a214-0d047578d1c8",
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          recipientId: "e6b98486-42db-4fcc-a214-0d047578d1c8",
        }),
        expect.objectContaining({
          recipientId: "e6b98486-42db-4fcc-a214-0d047578d1c8",
        }),
      ]),
    );
  });
});
