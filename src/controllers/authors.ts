import { IRouterContext } from 'koa-router'

import Author from '../mongo/models/author'

export const getAuthors = async (ctx: IRouterContext) => {
  try {
    const authors = await Author.find().exec()

    ctx.body = authors
  } catch (err) {
    ctx.throw(err)
  }
}

export const createAuthor = async (ctx: IRouterContext) => {
  try {
    const { body } = ctx.request
    const author = await Author.create(body)

    ctx.body = author
  } catch (err) {
    ctx.throw(err)
  }
}
