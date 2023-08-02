import { IsString, IsNumber } from 'class-validator';

// a DTO is a description of how an object should be shaped
export class createUserDto {
  @IsString()
  name: string;
  @IsNumber()
  age: number;
  @IsString()
  email: string;
  @IsString()
  password: string;
}
