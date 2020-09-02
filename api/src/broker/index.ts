import RabbitConnection, { Rabbit } from './rabbitmq';

import { RABBIT_PREFETCH, RABBIT_QUEUES } from '../config';

const rabbit = RabbitConnection();
console.log('rabbitconnection')
async function bootRabbitMQ() {
  try {
    await rabbit.init();
    console.log("initing")
    await rabbit.createChannel(RABBIT_PREFETCH);

    await rabbit.createQueues(RABBIT_QUEUES);
  } catch (err) {
    console.log({ error: { ...err } })
  }
}

export default RabbitConnection;
export { Rabbit, bootRabbitMQ } 