import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { User } from './models/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAllUser(): Promise<User[]> {
    return this.usersService.findAllUser();
  }

  @Post()
  addUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.usersService.addUser(createUserDto);
  }

  @Get(':id')
  findUserById(@Param('id') id: string) {
    return this.usersService.findUserById(id);
  }
  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, updateUserDto);
  }
}
