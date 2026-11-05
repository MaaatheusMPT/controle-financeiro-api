import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateTransacaoDto {
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsNumber()
  @Min(0.01)
  valor: number;

  @IsEnum(['receita', 'despesa'])
  tipo: 'receita' | 'despesa';

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsBoolean()
  consumoConsciente: boolean;
}