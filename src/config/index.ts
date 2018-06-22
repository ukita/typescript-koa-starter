import dotenv from 'dotenv'
dotenv.config({ path: process.env.DOTENV_PATH })

export const app = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.APP_PORT || '3000'
}

export default {
  app
}
