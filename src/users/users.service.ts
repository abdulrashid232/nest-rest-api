import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './DTO/user.dto';
import { User } from './models/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  findAllUser(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  findUserById(id: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.id === id);
    return Promise.resolve(user);
  }

  addUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = { id: Date.now().toString(), ...createUserDto };
    this.users.push(newUser);
    return Promise.resolve(newUser);
  }

  updateUser(
    id: string,
    updateUserDto: Partial<CreateUserDto>,
  ): Promise<User | undefined> {
    return this.findUserById(id).then((user) => {
      if (!user) return undefined;
      Object.assign(user, updateUserDto);
      return Promise.resolve(user);
    });
  }
}
