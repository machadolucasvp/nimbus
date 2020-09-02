import { WorkerPool } from './pool';
import { bootRabbitMQ } from './broker';

import { WORKERS_AMOUNT } from './config';

const composeIfExists = (value: any, func?: Function) => func ? func(value) : func;

(async function initWorkersPool(callback?: Function) {
  try {
    await bootRabbitMQ()
    const workerPool = new WorkerPool(WORKERS_AMOUNT);

    workerPool.init();
    workerPool.setAllWorkersActive();

    composeIfExists(workerPool.size, callback);
  } catch (err) {
    console.log({ error: { ...err } })
  }
})((amount: number) => console.log(`Running ${amount} workers`))
