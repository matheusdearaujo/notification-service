import {
  CountRecipientNotificationsRequestDTO,
  CountRecipientNotificationsResponseDTO,
} from "@/app/dtos";

export abstract class CountRecipientNotificationsUseCase {
  abstract execute(
    data: CountRecipientNotificationsRequestDTO,
  ): Promise<CountRecipientNotificationsResponseDTO>;
}
