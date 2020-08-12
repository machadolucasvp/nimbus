import Router from 'koa-router';

import { AuthController } from '@controllers/.'
import { UserController } from '@controllers/.'

const router = new Router({
  prefix: '/api'
});

router.post('/login', AuthController.login)
router.post('/user', UserController.post)
router.get('/user/:id', UserController.get)

export { router as Router };