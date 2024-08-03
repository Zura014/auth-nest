import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigValidationSchema } from 'config.schema';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      envFilePath: '.env.stage.dev',
      validationSchema: ConfigValidationSchema,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'omJUmt6a',
      database: 'nest-auth',
      entities: [__dirname + '/**/entity/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => ({
    // type: 'mysql',
    // host: configService.get('DB_HOST'),
    // port: configService.get('DB_PORT'),
    // username: configService.get('DB_USERNAME'),
    // password: configService.get('DB_PASSWORD'),
    // database: configService.get('DB_NAME'),
    // entities: [__dirname + '/**/entity/*.entity{.ts,.js}'],
    // synchronize: true,
    // }),
    // }),
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
