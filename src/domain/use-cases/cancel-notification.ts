import { CancelNotificationRequestDTO } from "@/app/dtos";

export abstract class CancelNotificationUseCase {
  abstract execute(data: CancelNotificationRequestDTO): Promise<void>;
}
