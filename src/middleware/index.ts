import compose from 'koa-compose'
import bodyParser from 'koa-body'
import compress from 'koa-compress'
import logger from 'koa-pino-logger'
import cors from '@koa/cors'

import { app } from '../config'

export default () => compose([logger({
  enabled: app.env !== 'test'
}), compress(), bodyParser(), cors()])
