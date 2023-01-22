import {
  IsEmail,
  IsNumber,
  IsNumberString,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Event } from '../entities/event.entity';

export class CreateEventDto extends Event {
  @IsString()
  event_name: string;

  @IsString()
  responsible_name: string;

  @IsString()
  @Matches(/^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/i, {
    message: '$property must be formatted as yyyy-mm-dd',
  })
  date: string;

  @IsString()
  @Matches(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/i, {
    message: '$property must be formatted as HH:MM',
  })
  time: string;

  @IsNumberString()
  @MinLength(8)
  @MaxLength(8)
  zip_code: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Matches(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/i, {
    message: '$property must be formatted as (xx) xxxxx-xxxx',
  })
  phone_number: string;

  @IsString()
  @Matches(/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/i, {
    message: '$property must be a valid image URL',
  })
  event_image: string;
}
