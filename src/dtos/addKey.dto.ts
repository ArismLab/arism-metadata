import { IsNotEmpty } from 'class-validator'
import { KeyDto } from 'src/dtos'

export class AddKeyDto {
    @IsNotEmpty()
    user: string

    @IsNotEmpty()
    key: KeyDto
}
