const Koa = require('koa');
const app = new Koa();
const routerPathArr = [
    ...require('./src/jsonp.js'),
]
app.use(async ctx => {
    for(let router of routerPathArr){
        if(router.path === ctx.path){
            await router.deal(ctx);
            return;
        }
    }
    ctx.body = '404';
});


app.listen(3001);