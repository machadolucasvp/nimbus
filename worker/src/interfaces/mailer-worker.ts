import { Mailer } from "../mailer";

export interface MailerWorker{
  worker_id: number,
  worker: Mailer
}