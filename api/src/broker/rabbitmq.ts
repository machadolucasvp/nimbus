import amqp, { Channel, Connection } from 'amqplib';
import { AMQP_URI } from '../config';

class Rabbit {
  static instance: Rabbit;

  #channel?: Channel;

  #connection?: Connection;

  async init() {
    this.#connection = await amqp.connect(AMQP_URI);
    return this.#connection;
  }

  getChannel() {
    return this.#channel;
  }

  async createChannel(prefetchOptions = 1) {
    this.#channel = await this.#connection?.createChannel();

    return this.#channel?.prefetch(prefetchOptions);
  }

  async createQueues(queues: string[]) {
    return queues.map((queue) => this.#channel?.assertQueue(queue));
  }

  async toQueue(queue: any, payload: any, options?: any) {
    return this.#channel?.sendToQueue(queue, Buffer.from(JSON.stringify(payload)), options);
  }

  async consume(queue: any, onMessage: any) {
    return this.#channel?.consume(queue, onMessage)
  }

  static getInstance() {
    if (this.instance) return this.instance;

    this.instance = new Rabbit();
    return this.instance;
  }
}

export default Rabbit.getInstance;
export { Rabbit };
