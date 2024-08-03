import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { EntitiesModule } from 'src/shared/entities.module';

@Module({
  imports: [EntitiesModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
