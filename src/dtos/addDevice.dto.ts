import { IsNotEmpty } from 'class-validator'
import { DeviceDto } from 'src/dtos'

export class AddDeviceDto {
    @IsNotEmpty()
    user: string

    @IsNotEmpty()
    device: DeviceDto
}
