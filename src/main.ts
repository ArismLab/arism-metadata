import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { AppModule } from './app.module'

const bootstrap = async () => {
    const app = await NestFactory.create(AppModule)

    const configService = app.get(ConfigService)
    const host = configService.get<string>('host')
    const port = configService.get<number>('port')

    await app.listen(port)
}

bootstrap()
