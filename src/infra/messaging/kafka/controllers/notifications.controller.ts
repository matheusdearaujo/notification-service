import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { SendNotification } from "@/app/use-cases/send-notification";

interface ReceiveNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationsController {
  constructor(private _sendNotification: SendNotification) {}

  @EventPattern("notifications.send-notification")
  async handle(
    @Payload() { recipientId, content, category }: ReceiveNotificationPayload,
  ): Promise<void> {
    await this._sendNotification.execute({
      recipientId,
      content,
      category,
    });
  }
}
