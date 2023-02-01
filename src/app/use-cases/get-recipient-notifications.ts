import { Injectable } from "@nestjs/common";
import { GetRecipientNotificationsUseCase } from "@/domain/use-cases/get-recipient-notifications";
import { NotificationsRepository } from "../repositories/notifications.repository";
import {
  GetRecipientNotificationsRequestDTO,
  GetRecipientNotificationsResponseDTO,
} from "../dtos";

@Injectable()
export class GetRecipientNotifications
  implements GetRecipientNotificationsUseCase
{
  constructor(private _notificationsRepository: NotificationsRepository) {}

  async execute(
    data: GetRecipientNotificationsRequestDTO,
  ): Promise<GetRecipientNotificationsResponseDTO> {
    const { recipientId } = data;

    const notifications =
      await this._notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}
