import axios from 'axios'

describe('Ping endpoint', () => {
  it('should ping back with 200 as return status code', async () => {
    const res = await axios.get('http://localhost:8080/ping')

    expect(res.data).toHaveProperty('pong')
    // We cast the json types into an object because the response should have it
    // since the json const has the property named "pong".
    expect((res.data as unknown as { pong: boolean }).pong).toBeTruthy()
  })
})
