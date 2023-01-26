import { Injectable } from '@nestjs/common';
import Mail = require('nodemailer/lib/mailer')
import * as nodemailer from 'nodemailer'

interface EmailOptions{
    to:string
    subject:string
    html:string
}

@Injectable()
export class EmailService {
    private transporter: Mail

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'test@gmail.com',
                pass: 'testpw123'
            }
        })
    }

    async sendMemberJoinVerification(emailAddress: string, signupVerifyToken: string){
        const baseUrl = 'http://localhost:8520'

        const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`

        const mailOptions: EmailOptions = {
            to: emailAddress,
            subject: '가입 인증 메일',
            html: `
                가입 확인 버튼을 누리면 가입 인증이 완료욉니다. <br/>
                <form action="${url}" method="post">
                <button>가입확인</button>
                </form>
            `
        }

        return await this.transporter.sendMail(mailOptions)
    }
}
