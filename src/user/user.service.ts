import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    // @InjectRepository(UserEntity)
    // private readonly userRepository: Repository<UserEntity>,
    // @InjectRepository(UserEntity)
    // private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<any> {
    // const { email, password, username } = createUserDto;

    // const defaultRole = 'user';

    // const existingUser = await this.userRepository.findOne({
    //   where: {
    //     username,
    //     email
    //   },
    // });
    console.log(createUserDto);
  }
}
