import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EmailService} from "../email/email.service";
import * as uuid from 'uuid'
import {UserInfo} from "os";

// Injectable 데커레이터로 다른 nest 컴포넌트에 주입할 수 있는 상태가 됨
@Injectable()
export class UsersService {
  constructor(private emailService: EmailService) {
  }

  async createUser(name: string, email:string, password: string){
    await this.checkUserExists(email)

    const signupVerifyToken = uuid.v1()

    await this.saveUser(name, email, password, signupVerifyToken)
    // await this.sendMemberJoinEmail(email, signupVerifyToken)
  }

  // 이미 가입한 유저인지 확인
  private checkUserExists(email: string) {
    return false
  }

  // 유저 정보 저장
  private saveUser(name: string, email: string, password: string, signupVerifyToken: string) {
    return
  }

  // 회원가입 인증 이메일 발송
  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    await this.emailService.sendMemberJoinVerification(email, signupVerifyToken)
  }

  // 이메일 인증
  async verifyEmail(signupVerifyToken: string) : Promise<string> {
    throw new Error('Method not implemented.');
  }

  async login(email:string, password: string): Promise<string>{
    throw new Error('Method not implemented.');
  }

  /*
  async getUserInfo(userId: string) : Promise<UserInfo>{
    throw new Error('Method not implemented.')
  }
  */

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
