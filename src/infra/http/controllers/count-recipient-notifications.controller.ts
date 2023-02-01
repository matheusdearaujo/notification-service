import { Controller, Get, Param } from "@nestjs/common";
import { CountRecipientNotifications } from "@/app/use-cases/count-recipient-notifications";

@Controller("notifications")
export class CountRecipientNotificationsController {
  constructor(
    private _countRecipientNotifications: CountRecipientNotifications,
  ) {}

  @Get("count/:recipientId")
  async handle(@Param("recipientId") recipientId: string): Promise<number> {
    const { count } = await this._countRecipientNotifications.execute({
      recipientId,
    });

    return count;
  }
}
