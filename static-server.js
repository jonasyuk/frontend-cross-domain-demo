const Koa = require('koa');
const app = new Koa();
const path = require('path');
const fs = require('fs');

const cache = {};

app.use(async ctx => {
    // const res = fs.readFile('./test.txt', 'utf8');
    const filePath = path.join(__dirname + ctx.path);
    console.log(filePath);
    // if(cache[filePath]){
    //     ctx.body = cache[filePath];
    //     return;
    // }
    const {err,data} = await (new Promise(
        (resolve)=>{ 
            fs.readFile(filePath, 'utf8',(err,data)=>{
                resolve({err,data});
            })
        }));
    if(data) {
        ctx.body = data;
        cache[filePath] = data;
    }
    else {
        ctx.body = '404';
    }
    
});


app.listen(3000);