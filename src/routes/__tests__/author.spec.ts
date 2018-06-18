import {
  request,
  connectDatabase,
  dropDatabase,
  disconnectDatabase
} from '../../../test/helpers'

import Author from '../../mongo/models/author'

beforeAll(connectDatabase)

afterEach(dropDatabase)

afterAll(disconnectDatabase)

describe('Author Routes', () => {
  test('GET /authors returns a list of authors', async () => {
    await Author.create({ firstName: 'John', lastName: 'Doe' })

    const res = await request().get('/authors')

    expect(res.body.length).toBe(1)
  })

  test('POST /authors create a new author', async () => {
    await request()
      .post('/authors')
      .send({ firstName: 'John', lastName: 'Doe' })

    const count = await Author.count({}).exec()

    expect(count).toBe(1)
  })
})
