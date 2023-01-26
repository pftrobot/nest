import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpCode, NotFoundException, Header, Redirect, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {UserInfo} from "os";

@Controller('users')
// 컨트롤러는 비즈니스 로직을 직접 수행하지 않음
export class UsersController {
  // 프로바이더를 컨트롤러에 주입하여 프로바이더에서 비즈니스 로직 수행
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const { name, email } = createUserDto;

    return `유저를 생성했습니다. 이름: ${name}, 이메일: ${email}`;
  }

  @Get()
  findAll(@Res() res) {
    const users = this.usersService.findAll()

    return res.status(200).send(users);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   if (+id < 1) {
  //     throw new NotFoundException('User is not found');
  //   }

  //   return this.usersService.findOne(+id);
  // }

  // @Header('Custom', 'Test Header')
  // @Get(':id')
  // findOneWithHeader(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  @Redirect('https://nestjs.com', 301)
  @Get(':id')
  findOneRedirection(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @HttpCode(202)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} user`;
  }

  // @Delete(':userId/memo/:memoId')
  // deleteUserMemo(@Param() params: { [key: string]: string }) {
  //   return `userId: ${params.userId}, memoId: ${params.memoId}`;
  // }

  @Delete(':userId/memo/:memoId')
  deleteUserMemo(
    @Param('userId') userId: string,
    @Param('memoId') memoId: string,
  ) {
    return `userId: ${userId}, memoId: ${memoId}`;
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto): Promise<string>{
    const { signupVerifyToken} = dto

    return await this.usersService.verifyEmail(signupVerifyToken)
  }

  @Post('login')
  async login(@Body() dto): Promise<string>{
    const {email, password} = dto

    return await this.usersService.login(email,password)
  }

  /*
  @Get('/:id')
  async getUserInfo(@Param('id') userId:string):Promise<UserInfo>{
    return await this.usersService.getUserInfo(userId)
  }
  */

}
