import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import { SERVER_PORT } from './config';
import { initWorkersPool } from './workers';
import "@infra/typeorm"

import { Router } from './routes';

(async function bootstrap() {
  const app = new Koa();

  app.use(bodyParser())
  app.use(logger())

  app.use(Router.routes())
  app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
  initWorkersPool((poolSize: number) => console.log(`${poolSize} workers running in pool`))
})()