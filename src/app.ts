import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import { createConnection } from 'typeorm';

import { SERVER_PORT } from './config';

import { Router } from './routes';

(async function bootstrap() {
  const app = new Koa();

  app.use(bodyParser())
  app.use(logger())

  try {
    await createConnection();
  } catch (err) {
    console.log({ error: { ...err } })
  }

  app.use(Router.routes())
  app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
})()