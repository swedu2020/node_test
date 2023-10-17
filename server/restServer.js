const http = require('http');
const fs = require('fs').promises;
const path = require('path');
http.createServer(async (req, res)=>{
    try{
        console.log(req.method, req.url);
        if(req.method === 'GET'){
            if(req.url === '/'){
                return res.end('<h1>GET /</h1>');
            }else if(req.url === '/hello'){
                return res.end('<h1>GET /hello</h1>');
            }else{
                return res.end('<h1>GET error</h1>');
            }
        }
    }catch(err){
        console.error(err);
    }
}).listen(8080, ()=>{
    console.log('8080포트 서버 작동중...');
});