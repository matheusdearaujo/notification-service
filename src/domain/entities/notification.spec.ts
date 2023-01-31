import { randomUUID } from "node:crypto";
import { Notification } from "./notification";
import { NotificationContent } from "./value-objects/notification-content";

describe("Notification", () => {
  it("should be able to create a notification", () => {
    const notification = new Notification({
      content: new NotificationContent("This is a notification"),
      category: "Social",
      recipientId: randomUUID(),
    });

    expect(notification).toBeTruthy();
  });
});
