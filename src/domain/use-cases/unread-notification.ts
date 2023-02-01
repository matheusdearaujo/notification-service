import { UnreadNotificationRequestDTO } from "@/app/dtos";

export abstract class UnreadNotificationUseCase {
  abstract execute(data: UnreadNotificationRequestDTO): Promise<void>;
}
