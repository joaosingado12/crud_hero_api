import { IsEmpty, IsOptional, IsString, IsNotEmpty} from "class-validator"

export class CreateSuperheroDto {

    @IsString({ message: 'O nome deve ser um texto' })
    @IsNotEmpty({ message: 'O nome é obrigatório' })
    name: string 

    @IsString()
    @IsOptional()
    realName?: string
    
    @IsString()
    @IsNotEmpty({ message: 'O superpoder é obrigatório' })
    superPower: string

    @IsString()
    @IsOptional()
    team?: string
}
