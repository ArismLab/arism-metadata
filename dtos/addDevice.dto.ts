import { IsNotEmpty } from 'class-validator'
import { DeviceDto } from '@dtos'

export class AddDeviceDto {
    @IsNotEmpty()
    user: string

    @IsNotEmpty()
    device: DeviceDto
}
