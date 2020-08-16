import { SendMailOptions ,Transporter, createTransport } from 'nodemailer';

import { MAIL_USER, MAIL_PASS } from '../../config';

export class SMTPTransport {
  transport: Transporter;

  constructor() {
    this.transport = createTransport({
      service: 'gmail',
      pool: true,
      secure: true,
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS
      }
    })
  }

  async send(mail: SendMailOptions) {
    return this.transport.sendMail({
      from: MAIL_USER,
      ...mail
    })  
  }
}

export default new SMTPTransport();