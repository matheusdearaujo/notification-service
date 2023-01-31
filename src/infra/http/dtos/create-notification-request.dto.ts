import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateNotificationRequestDTO {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 255)
  content: string;

  @IsNotEmpty()
  category: string;
}
