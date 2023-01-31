import { Module } from "@nestjs/common";
import { SendNotification } from "@/app/use-cases/send-notification";
import { SendNotificationsController } from "./controllers/send-notifications.controller";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [SendNotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
