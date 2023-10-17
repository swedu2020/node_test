const http = require('http');
http.createServer((req, res)=>{
  console.log(req.url, req.headers.cookie);
  res.writeHead(200, {'set-cookie': 'mycookie=test'});
  res.end('Hello Cookie');  
}).listen(8080, ()=>{
    console.log('8080포트 서버 작동중...');
});