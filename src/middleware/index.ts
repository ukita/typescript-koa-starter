import compose from 'koa-compose'
import bodyParser from 'koa-body'
import compress from 'koa-compress'
import logger from 'koa-pino-logger'
import helmet from 'koa-helmet'
import cors from '@koa/cors'

import { app } from '../config'

export default () => compose([logger({
  enabled: app.env !== 'test'
}), helmet(), compress(), bodyParser(), cors()])
