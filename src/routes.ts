import Router from 'koa-router';

import { AuthController } from '@controllers/.'

const router = new Router({
  prefix: '/api'
});

router.post('/login', AuthController.login)

export { router as Router };