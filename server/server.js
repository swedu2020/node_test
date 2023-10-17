const http = require('http');
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hellow Node2</h1>');
    res.end('<p>Hello Server2</p>');
}).listen(8080);
server.on('listening', ()=>{
    console.log('8080포트 서버 작동중...');
});
server.on('error', (error)=>{
    console.error(error);
});