import { Worker } from './worker';

export interface IPoolWorker { 
  id: number,
  active: boolean,
  instance: Worker,
  work: (into: string) => void 
}