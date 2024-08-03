import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  @MinLength(4, { message: 'First name must consist of at least 4 elements.' })
  @MaxLength(20, {
    message: 'First name must contain a maximum of 20 elements.',
  })
  firstName?: string;

  @IsOptional()
  @IsString()
  @MinLength(4, { message: 'Last name must consist of at least 4 elements.' })
  @MaxLength(20, {
    message: 'Last name must contain a maximum of 20 elements.',
  })
  lastName?: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4, { message: 'username must consist of at least 4 elements.' })
  @MaxLength(20, {
    message: 'username must contain a maximum of 20 elements.',
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, {
    message: 'The password must consist of at least 8 elements.',
  })
  @MaxLength(32, {
    message: 'The password should contain a maximum of 32 elements.',
  })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'The password is weak',
  })
  password: string;
}
