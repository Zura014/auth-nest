import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const user = await this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async showAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async updateUser(
    id: number,
    userData: Partial<UpdateUserDto>,
  ): Promise<Partial<UpdateUserDto>> {
    const user = await this.userRepository.findOne({ where: { id } });
    await this.userRepository.update({ id }, userData);
    return user;
  }

  async getUser(id: number): Promise<any> {
    const user = await this.userRepository.findOne({ where: { id } });
    return user;
  }
}
