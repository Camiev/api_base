import Router from 'koa-router';
import { getHealth } from '@interfaces/controllers/healthController';

const healthRouter = new Router();

healthRouter.get('/', async (ctx) => {
  ctx.status = 200;
  ctx.body = { message: 'The API is healthy' };
});

healthRouter.get('/health', getHealth);

export default healthRouter;
