import { Injectable } from "@nestjs/common";
import { CountRecipientNotificationsUseCase } from "@/domain/use-cases/count-recipient-notifications";
import { NotificationsRepository } from "../repositories/notifications.repository";
import {
  CountRecipientNotificationsRequestDTO,
  CountRecipientNotificationsResponseDTO,
} from "../dtos";

@Injectable()
export class CountRecipientNotifications
  implements CountRecipientNotificationsUseCase
{
  constructor(private _notificationsRepository: NotificationsRepository) {}

  async execute(
    data: CountRecipientNotificationsRequestDTO,
  ): Promise<CountRecipientNotificationsResponseDTO> {
    const { recipientId } = data;

    const count = await this._notificationsRepository.countManyByRecipientId(
      recipientId,
    );

    return { count };
  }
}
