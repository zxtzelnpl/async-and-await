const Router = require('koa-router');
const {waiting} = require('./utils');

const router = new Router();

router.get('/query/:letter/:number',async ctx=>{
    const {letter,number} = ctx.params;
    const time = Number(number);

    await waiting(time);

    ctx.body = {
        letter:letter
    }
});

router.get('/error/500',async ctx=>{
    await waiting(1000);

    ctx.throw(500);
})

module.exports = router;