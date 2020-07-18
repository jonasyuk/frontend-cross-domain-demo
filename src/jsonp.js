

module.exports = [{
    path:'/jsonp/demo',
    async deal(ctx){
        if(ctx.query['callback']){
            ctx.body = `${ctx.query['callback']}(${JSON.stringify({time:new Date()})})`;
        }else{
            ctx.body = 'Can not found the callback function name';
            ctx.status = 400;
        }
        
    }
}]