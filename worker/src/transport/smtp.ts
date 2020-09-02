import { SendMailOptions, Transporter, createTransport } from 'nodemailer';
import { MAIL_USER, MAIL_PASS } from '../config';
import { MailerTransport } from '../interfaces/mailer-transport';
import SMTPPool from 'nodemailer/lib/smtp-pool';

export class SMTPTransport implements MailerTransport {
  transport: Transporter;

  constructor(options?: SMTPPool.Options) {
    this.transport = createTransport(options || {
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
      from: mail.from ?? MAIL_USER,
      ...mail
    })
  }
}

export default new SMTPTransport();