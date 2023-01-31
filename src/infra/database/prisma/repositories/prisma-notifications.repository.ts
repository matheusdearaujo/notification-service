import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "@/app/repositories/notifications.repository";
import { Notification } from "@/domain/entities/notification";
import { PrismaService } from "../prisma.service";
import { PrismaNotificationMapper } from "../mappers/prisma-notification.mapper";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private _prisma: PrismaService) {}

  async findById(notificationId: string): Promise<Notification | null> {
    throw new Error("Method not implemented.");
  }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this._prisma.notification.create({
      data: raw,
    });
  }

  async save(notification: Notification): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
