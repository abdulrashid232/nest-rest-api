/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsNumber()
  readonly age: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
