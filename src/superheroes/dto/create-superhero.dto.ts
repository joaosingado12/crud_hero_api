import { IsEmpty, IsOptional, IsString} from "class-validator"

export class CreateSuperheroDto {

    @IsString({ message: 'O nome deve ser um texto' })
    @IsEmpty({ message: 'O nome é obrigatório' })
    name: string

    @IsString()
    @IsOptional()
    realName?: string
    
    @IsString()
    @IsEmpty({ message: 'O superpoder é obrigatório' })
    superPower: string

    @IsString()
    @IsOptional()
    team?: string
}
