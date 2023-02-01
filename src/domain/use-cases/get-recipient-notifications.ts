import {
  GetRecipientNotificationsRequestDTO,
  GetRecipientNotificationsResponseDTO,
} from "@/app/dtos";

export abstract class GetRecipientNotificationsUseCase {
  abstract execute(
    data: GetRecipientNotificationsRequestDTO,
  ): Promise<GetRecipientNotificationsResponseDTO>;
}
