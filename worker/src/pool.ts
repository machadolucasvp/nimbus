import { MailerWorker } from "./mailer-worker";
import { IPoolWorker } from "./interfaces/pool-worker";
import { PoolWorker } from './pool-worker';
export class WorkerPool {
  pool: IPoolWorker[] = [];
  size: number;

  constructor(size: number) {
    this.size = size;
  }

  init() {
    this.pool = Array(this.size || 1).fill(undefined)
      .map((_, index) => PoolWorker.build({
        id: index,
        active: false,
        instance: new MailerWorker()
      }))
  }

  setAllWorkersActive() {
    this.pool.forEach(poolWorker => poolWorker.work('mailer'))
  }
}