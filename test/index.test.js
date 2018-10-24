import http from 'http';
import server from '@/index';

test('server - returns 200', (done) => {
  http.get('http://localhost:3000', (res) => {
    expect(res.statusCode).toBe(200);

    let response = '';
    res.on('data', (chunk) => {
      response += chunk;
    });

    res.on('end', () => {
      expect(response).toContain('Kommunity.App');
      done();
    });
  });
});

afterAll((done) => {
  server.close(done);
});
