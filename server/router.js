const Router = require('koa-router');
const {waiting} = require('./utils');

const router = new Router();

router.get('/',ctx=>{
    
})

router.get('/query/:letter/:number',async ctx=>{
    const {letter,number} = ctx.params;
    const time = Number(number);

    await waiting(time);

    ctx.body = {
        letter:letter
    }
})

module.exports = router;