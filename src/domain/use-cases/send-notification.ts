import {
  SendNotificationRequestDTO,
  SendNotificationResponseDTO,
} from "@/app/dtos";

export abstract class SendNotificationUseCase {
  abstract execute(
    data: SendNotificationRequestDTO,
  ): Promise<SendNotificationResponseDTO>;
}
