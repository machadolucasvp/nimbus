import Router from 'koa-router';

import { authController } from './src/controllers'
import { userController } from './src/controllers'

const router = new Router({
  prefix: '/api'
});

router.post('/login', authController.login)
router.post('/user', userController.post)
router.get('/user/:id', userController.get)

export { router as Router };