import Koa from 'koa'

import middleware from './middleware'
import router from './routes'

const app = new Koa()

app.use(middleware())

app.use(router.routes())
app.use(router.allowedMethods())

export default app
