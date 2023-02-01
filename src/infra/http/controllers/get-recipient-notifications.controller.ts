import { Controller, Get, Param } from "@nestjs/common";
import { GetRecipientNotifications } from "@/app/use-cases/get-recipient-notifications";
import { NotificationViewModel } from "../view-models/notification.view-model";
import { GetRecipientNotificationsResponseDTO } from "../dtos";

@Controller("notifications")
export class GetRecipientNotificationsController {
  constructor(private _getRecipientNotifications: GetRecipientNotifications) {}

  @Get(":recipientId")
  async handle(
    @Param("recipientId") recipientId: string,
  ): Promise<GetRecipientNotificationsResponseDTO> {
    const { notifications } = await this._getRecipientNotifications.execute({
      recipientId,
    });

    return {
      notifications: notifications.map(NotificationViewModel.toHTTP),
    };
  }
}
