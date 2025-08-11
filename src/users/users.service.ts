import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from './models/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  findAllUser(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  findUserById(id: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    return Promise.resolve(user);
  }

  addUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = { id: Date.now().toString(), ...createUserDto };
    this.users.push(newUser);
    return Promise.resolve(newUser);
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User | undefined> {
    const user = await this.findUserById(id);
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    Object.assign(user, updateUserDto);
    return user;
  }
}
