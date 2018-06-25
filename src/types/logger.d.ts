import * as Koa from 'koa'
import { BaseLogger } from 'pino'

declare module 'koa' {
  interface Context {
    log: BaseLogger
  }
}
