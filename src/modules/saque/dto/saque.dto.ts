import { IsInt, IsNotEmpty, IsNumber, IsPositive, Min } from "class-validator";

export class SaqueDto {
  @IsInt({ message: 'Valor do campo dever ser numerico e inteiro.'})
  @Min(2, { message: 'Valor minimo para a campo deve ser 2.'})
  @IsPositive({message: 'Valor para a campo deve ser positivo.'})
  @IsNotEmpty({ message: 'Campo requerido.'})
  valor: number;
}