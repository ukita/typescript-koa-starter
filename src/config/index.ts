import dotenv from 'dotenv'
dotenv.config({ path: process.env.DOTENV_PATH })

export const app = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.APP_PORT || '3000'
}

export const mongo = {
  uri: process.env.APP_MONGODB_URI,
  host: process.env.APP_MONGODB_HOST || 'mongo',
  database: process.env.APP_MONGODB_DB || 'app',
  port: process.env.APP_MONGODB_PORT || '27017',
  username: process.env.APP_MONGODB_USERNAME,
  password: process.env.APP_MONGODB_PASSWORD,
  retries: process.env.APP_MONGODB_CONN_RETRIES || 5
}

export default {
  app,
  mongo
}
