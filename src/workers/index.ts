import { WorkerPool } from './pool';
import { WORKERS_AMOUNT } from 'src/config';

const composeIfExists = (value: any, func?: Function, ) => func ? func(value) : func;

export function initWorkersPool(func?: Function) {
  try {
    const workerPool = new WorkerPool(WORKERS_AMOUNT);

    workerPool.init();
    composeIfExists(workerPool.size, func);
  } catch (err) {
    console.log({ error: { ...err } })
  }
}