import { EventEmitter } from 'events'
import { IPoolWorker } from './interfaces/pool-worker';
import { Worker } from './interfaces/worker';

export class PoolWorker extends EventEmitter implements IPoolWorker {
  id: number;
  active: boolean;
  instance: Worker;

  constructor(id: number, active = false, instance: Worker){
    super();
    this.id = id;
    this.active = active;
    this.instance = instance;
    this.on('work', this._workListener)
  }

  static build(poolWorker: any) {
    return new PoolWorker(poolWorker.id, poolWorker.active, poolWorker.instance);
  }

  _workListener(into: string) {
    this.active = true;
    this.instance.work(into);
  }

  async work(into: string) {
    this.emit('work', into);
  }
}