import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "@/app/repositories/notifications.repository";
import { Notification } from "@/domain/entities/notification";
import { PrismaService } from "../prisma.service";
import { PrismaNotificationMapper } from "../mappers/prisma-notification.mapper";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private _prisma: PrismaService) {}

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = await this._prisma.notification.findUnique({
      where: {
        id: notificationId,
      },
    });

    if (!notification) {
      return null;
    }

    return PrismaNotificationMapper.toDomain(notification);
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = await this._prisma.notification.findMany({
      where: {
        recipientId,
      },
    });

    return notifications.map(PrismaNotificationMapper.toDomain);
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = await this._prisma.notification.count({
      where: {
        recipientId,
      },
    });

    return count;
  }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this._prisma.notification.create({
      data: raw,
    });
  }

  async save(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this._prisma.notification.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
}
