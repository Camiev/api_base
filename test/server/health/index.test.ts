import supertest from 'supertest';
import server from '../../../src/server';
import logger from '../../../src/server/logger';

logger.transports[0].silent = true;

describe('Health', () => {
  afterAll(() => {
    server.close();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should response status 200 with a message "The API is healthy" when GET / is called ', async () => {
    const response = await supertest(server)
      .get('/');

    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual('The API is healthy');
  });

  it('should response status 200 with a body when GET /health is called ', async () => {
    const response = await supertest(server)
      .get('/health');
    
    expect(response.status).toEqual(200);
    expect(response.body).toBeTruthy();
  });
});
