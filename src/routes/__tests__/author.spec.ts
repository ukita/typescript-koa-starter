import {
  request
} from '../../../test/helpers'

describe('Author Routes', () => {
  test('GET /authors returns a list of authors', async () => {
    try {
      const res = await request().get('/authors')

      expect(res.body.length).toBe(2)
    } catch (error) {
      fail()
    }
  })

  test('POST /authors create a new author', async () => {
    try {
      const author = { firstName: 'John', lastName: 'Doe' }
      const res = await request()
        .post('/authors')
        .send(author)

      expect(res.body).toEqual(author)
    } catch (error) {
      fail()
    }
  })
})
