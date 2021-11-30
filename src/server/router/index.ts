import Router from 'koa-router';
import healthRouter from './healthRouter';

const router = new Router();
router.use(healthRouter.routes());

export default router;
