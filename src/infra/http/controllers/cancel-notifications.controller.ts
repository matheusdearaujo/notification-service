import { Controller, Param, Patch } from "@nestjs/common";
import { CancelNotification } from "@/app/use-cases/cancel-notification";

@Controller("notifications")
export class CancelNotificationsController {
  constructor(private _cancelNotification: CancelNotification) {}

  @Patch("cancel/:notificationId")
  async handle(@Param("notificationId") notificationId: string): Promise<void> {
    await this._cancelNotification.execute({
      notificationId,
    });
  }
}
