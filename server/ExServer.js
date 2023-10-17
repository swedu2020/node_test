const express = require('express');
const app = express();
app.get('/users', (req, res)=>{
    res.json({'users': ['kim', 'lee', 'hong', 'park']});
});
app.listen(8080, ()=>{
    console.log('8080번 포트에서 대기중..!');
});
