import { NotificationContent } from "./notification-content";

describe("Notification NotificationContent", () => {
  it("should be able to create a notification content", () => {
    const content = new NotificationContent("Você recebeu uma notificação.");

    expect(content).toBeTruthy();
  });

  it("should not be able to create a notification content with less than 5 chars", () => {
    expect(() => new NotificationContent("Ola")).toThrow();
  });

  it("should not be able to create a notification content with more than 255 chars", () => {
    expect(() => new NotificationContent("a".repeat(256))).toThrow();
  });
});
