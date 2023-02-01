import { Controller, Param, Patch } from "@nestjs/common";
import { ReadNotification } from "@/app/use-cases/read-notification";

@Controller("notifications")
export class ReadNotificationsController {
  constructor(private _readNotification: ReadNotification) {}

  @Patch("read/:notificationId")
  async handle(@Param("notificationId") notificationId: string): Promise<void> {
    await this._readNotification.execute({
      notificationId,
    });
  }
}
