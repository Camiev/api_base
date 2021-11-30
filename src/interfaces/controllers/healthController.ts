import Koa from 'koa';

// eslint-disable-next-line import/prefer-default-export
export const getHealth = async (ctx: Koa.Context) => {
  ctx.status = 200;
  ctx.body = {
    packageName: process.env.npm_package_name,
    packageVersion: process.env.npm_package_version,
    nodeVersion: process.version,
    memory: process.memoryUsage(),
    pid: process.pid,
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
  };
};
