import SMTPTransport from './transport/smtp';
import RabbitConnection, { Rabbit } from './broker';

export class Mailer {
  queue: Rabbit

  constructor() {
    this.queue = RabbitConnection();
  }

  async consume(queue: string) {
    return this.queue.consume(queue, this.sendMail);
  }

  async sendMail(payload: any) {
    const decodedMail = JSON.parse(payload.content.toString());
    const channel = this.queue.getChannel();

    try {
      await SMTPTransport.send({
        to: 'lucasvufma@gmail.com',
        ...decodedMail
      })
      channel?.ack(payload);
    } catch (err) {
      channel?.nack(payload);
    }
  }
}
