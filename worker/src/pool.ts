import { Mailer } from "./mailer";
import { MailerWorker } from "./interfaces/mailer-worker";

export class WorkerPool {
  pool: MailerWorker[] = [];
  size: number;

  constructor(size: number) {
    this.size = size;
  }

  init() {
    Array(this.size || 1).fill(undefined)
      .map((_, index) => ({
        worker_id: index,
        worker: new Mailer()
      }))
  }
}