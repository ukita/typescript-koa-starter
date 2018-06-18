const NodeEnvironment = require('jest-environment-node')
const MongodbMemoryServer = require('mongodb-memory-server')

class MongoDbEnvironment extends NodeEnvironment {
  constructor (config) {
    super(config)

    this.mongod = new MongodbMemoryServer.default({
      version: '3.7'
    })
  }

  async setup () {
    await super.setup()

    this.global.__MONGODB_URI__ = await this.mongod.getConnectionString()
  }

  async teardown () {
    await this.mongod.stop()
    await super.teardown()
  }

  runScript (script) {
    return super.runScript(script)
  }
}

module.exports = MongoDbEnvironment
