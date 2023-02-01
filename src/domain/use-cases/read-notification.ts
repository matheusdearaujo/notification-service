import { ReadNotificationRequestDTO } from "@/app/dtos";

export abstract class ReadNotificationUseCase {
  abstract execute(data: ReadNotificationRequestDTO): Promise<void>;
}
