import { Body, Controller, Post } from "@nestjs/common";
import { SendNotification } from "@/app/use-cases/send-notification";
import { NotificationViewModel } from "../view-models/notification.view-model";
import {
  CreateNotificationRequestDTO,
  CreateNotificationResponseDTO,
} from "../dtos";

@Controller("notifications")
export class SendNotificationsController {
  constructor(private _sendNotification: SendNotification) {}

  @Post()
  async handle(
    @Body() body: CreateNotificationRequestDTO,
  ): Promise<CreateNotificationResponseDTO> {
    const { recipientId, content, category } = body;

    const { notification } = await this._sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification: NotificationViewModel.toHTTP(notification) };
  }
}
