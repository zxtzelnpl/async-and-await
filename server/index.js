const Koa = require('koa');
const cors = require('koa2-cors');
const static = require('koa-static');
const path = require('path');
const app = new Koa();
const webpack = require('webpack');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');



const router = require('./router');
const {
  getMode
} = require('./utils');

const mode = getMode(process.argv.splice(2));
let webpackConfig;
if(mode === 'production'){
  webpackConfig = require('../webpack.prod.js');
}else{
  webpackConfig = require('../webpack.dev.js');
}
const compiler = webpack(webpackConfig);


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
  .use(webpackDevMiddleware(compiler), {
    // all options optional

    noInfo: false,
    // display no info to console (only warnings and errors)

    quiet: false,
    // display nothing to the console

    lazy: true,
    // switch into lazy mode
    // that means no watching, but recompilation on every request

    watchDelay: 300,
    // delay after change (only lazy: false)

    publicPath: "/assets/",
    // public path to bind the middleware to
    // use the same as in webpack

    headers: {
      "X-Custom-Header": "yes"
    },
    // custom headers

    stats: {
      colors: true
    }
  })
  .use(router.routes())
  .use(router.allowedMethods())
// .use(static(path.join(__dirname,'../dist')));

app.listen(3000);