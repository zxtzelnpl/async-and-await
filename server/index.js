const Koa = require('koa');
const cors = require('koa2-cors');
const app = new Koa();

const router = require('./router');

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
  });
  
  // x-response-time
  
  app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  });
  
  // response
  app
  .use(cors({
    origin: function (ctx) {
        if (ctx.url === '/cors') {
            return "*"; // 允许来自所有域名请求
        }
        return 'http://localhost:8080';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'], //设置允许的HTTP请求类型
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  }))
  .use(router.routes())
  .use(router.allowedMethods())
  .use(ctx => {
    ctx.body = 'Hello World';
  });

  app.listen(3000);