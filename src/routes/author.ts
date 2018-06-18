import Router from 'koa-router'

import { getAuthors, createAuthor } from '../controllers/authors'

const router = new Router()

router.get('/authors', getAuthors)

router.post('/authors', createAuthor)

export default router
