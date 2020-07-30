import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';

import { Router } from './routes';
const app = new Koa();

app.use(bodyParser())
app.use(logger())

app.use(Router.routes())