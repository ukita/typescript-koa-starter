import supertest from 'supertest'
import mongoose from 'mongoose'
import bluebird from 'bluebird'

import app from '../src/app'

export const request = () => supertest.agent(app.listen())

mongoose.Promise = bluebird

// Add __MONGODB_URI__ to global scope
declare global {
  const __MONGODB_URI__: string
}

export const connectDatabase = async () => {
  await mongoose.connect(__MONGODB_URI__)
}

export const dropDatabase = async () => {
  await mongoose.connection.dropDatabase()
}

export const disconnectDatabase = async () => {
  await mongoose.disconnect()
}
