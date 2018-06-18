import mongoose from 'mongoose'
import bluebird from 'bluebird'

import { buildConnectionURI } from './conn'

import { mongo } from '../config'
import sleep from '../util/sleep'

mongoose.Promise = bluebird

export const connectDatabase = async (uri?: string) => {
  const mongoURI = uri || buildConnectionURI(mongo)

  try {
    return await mongoose.connect(mongoURI)
  } catch (error) {
    throw new Error(`Could not connect to MongoDB: ${mongoURI}`)
  }
}

export const connectDatabaseWithRetry = async (retry = 1): Promise<typeof mongoose> => {
  try {
    return await connectDatabase()
  } catch (error) {
    if (retry > mongo.retries) throw new Error(error)

    console.error(`Could not connect to MongoDB. Retrying in ${retry}s`)
    await sleep(1000 * retry)

    return connectDatabaseWithRetry(retry + 1)
  }
}
