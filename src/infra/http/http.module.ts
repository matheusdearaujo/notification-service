import { Module } from "@nestjs/common";

import { SendNotification } from "@/app/use-cases/send-notification";
import { CancelNotification } from "@/app/use-cases/cancel-notification";
import { CountRecipientNotifications } from "@/app/use-cases/count-recipient-notifications";
import { GetRecipientNotifications } from "@/app/use-cases/get-recipient-notifications";
import { ReadNotification } from "@/app/use-cases/read-notification";
import { UnreadNotification } from "@/app/use-cases/unread-notification";

import { SendNotificationsController } from "./controllers/send-notifications.controller";
import { CancelNotificationsController } from "./controllers/cancel-notifications.controller";
import { CountRecipientNotificationsController } from "./controllers/count-recipient-notifications.controller";
import { GetRecipientNotificationsController } from "./controllers/get-recipient-notifications.controller";
import { ReadNotificationsController } from "./controllers/read-notifications.controller";
import { UnreadNotificationsController } from "./controllers/unread-notifications.controller";

import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [
    SendNotificationsController,
    CancelNotificationsController,
    CountRecipientNotificationsController,
    GetRecipientNotificationsController,
    ReadNotificationsController,
    UnreadNotificationsController,
  ],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
