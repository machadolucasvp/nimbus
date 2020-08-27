import { WorkerPool } from './pool';

import { WORKERS_AMOUNT } from './config';

const composeIfExists = (value: any, func?: Function) => func ? func(value) : func;

export function initWorkersPool(callback?: Function) {
  try {
    const workerPool = new WorkerPool(WORKERS_AMOUNT);

    workerPool.init();
    composeIfExists(workerPool.size, callback);
  } catch (err) {
    console.log({ error: { ...err } })
  }
}((amount) => console.log(`Running ${amount} workers`))
