import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import cors from 'koa2-cors';
import koaLogger from 'koa-logger';
import dotenv from 'dotenv';
import logger from './logger';
import router from './router';

dotenv.config();

const app = new Koa();
const port = process.env.PORT || 3001;
const environment = process.env.NODE_ENV || 'development';

app.use(cors());
app.use(bodyparser());
app.use(koaLogger());

app.use(router.routes());

const server = app.listen(port, () => {
  logger.info(`Server running on port: ${port}, environment: ${environment}`);
});

export default server;
