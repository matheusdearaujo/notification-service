import { Controller, Param, Patch } from "@nestjs/common";
import { UnreadNotification } from "@/app/use-cases/unread-notification";

@Controller("notifications")
export class UnreadNotificationsController {
  constructor(private _unreadNotification: UnreadNotification) {}

  @Patch("unread/:notificationId")
  async handle(@Param("notificationId") notificationId: string): Promise<void> {
    await this._unreadNotification.execute({
      notificationId,
    });
  }
}
