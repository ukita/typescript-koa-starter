import Router from 'koa-router'

import author from './author'

const router = new Router()

router.use(author.routes(), author.allowedMethods())

export default router
