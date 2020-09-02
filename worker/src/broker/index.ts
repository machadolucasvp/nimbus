import RabbitConnection, { Rabbit } from './rabbitmq';

import { RABBIT_PREFETCH, RABBIT_QUEUES } from '../config';

const rabbit = RabbitConnection();

async function bootRabbitMQ() {
  try {
    await rabbit.init();

    await rabbit.createChannel(RABBIT_PREFETCH);

    await rabbit.createQueues(RABBIT_QUEUES);
  } catch (err) {
    console.log({ error: { ...err } })
  }
}

export default RabbitConnection;
export { Rabbit, bootRabbitMQ }