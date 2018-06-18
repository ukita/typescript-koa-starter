import app from '../app'
import config from '../config'
import { connectDatabaseWithRetry } from '../mongo'

const start = async () => {
  await connectDatabaseWithRetry()

  app.listen(config.app.port, () => {
    console.log(`Listening on ${config.app.port}`)
  })
}

start().catch(error => {
  console.error(error)
  process.exit(1)
})
