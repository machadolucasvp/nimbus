import Router from 'koa-router';

import { statusController, userController, authController } from './controllers'

const router = new Router({
  prefix: '/api'
});

router.get('/status', statusController.status)

router.post('/login', authController.login)
router.post('/user', userController.post)
router.get('/user/:id', userController.get)

export { router as Router };