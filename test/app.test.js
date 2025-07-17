const request = require('supertest');
const app = require('../index');

test('GET / should return Hello message', async () => {
  const res = await request(app).get('/');
  expect(res.text).toBe('Hello GitHub Actions!');
});
