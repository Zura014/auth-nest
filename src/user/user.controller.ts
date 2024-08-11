import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
// import { SkipThrottle, Throttle, ThrottlerException, ThrottlerStorage } from '@nestjs/throttler';

//? @SkipThrottle() //? skips all
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //* @SkipThrottle({ default: false }) //* except this one.
  //? @Throttle({ short: { ttl: 1000, limit: 1 } }) //! look at docs.
  //* I can also change short to default and it changes default behaviour.

  @Get('/:id')
  async getUsers(@Param('id') id: string): Promise<UserDto> {
    const user = await this.userService.getUser(parseInt(id));
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    return user;
  }
}
