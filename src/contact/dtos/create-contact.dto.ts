import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsString()
  @IsEmail()
  correo_electronico: string;

  @IsString()
  compania: string;

  @IsNumber()
  telefono: number;

  @IsString()
  mensaje: string;
}
