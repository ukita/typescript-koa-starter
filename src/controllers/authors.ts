import { IRouterContext } from 'koa-router'

const authors = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Joana', lastName: 'Doe' }
]

export const getAuthors = async (ctx: IRouterContext) => {
  try {
    ctx.body = authors
  } catch (err) {
    ctx.throw(err)
  }
}

export const createAuthor = async (ctx: IRouterContext) => {
  try {
    const { body } = ctx.request

    ctx.body = body
  } catch (err) {
    ctx.throw(err)
  }
}
