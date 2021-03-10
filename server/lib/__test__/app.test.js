const request = require('supertest')
const app = require('../app')

describe('app.js', () => {
  test('/', async () => {
    const expected = { hello: 'poop' }
    const res = await request(app).get('/')
    expect(res.body).toEqual(expected)
  })
})
