const express = require('express');

const router = express.Router();
// GET /user 일반 라우터
router.get('/abc', (req, res) => {
  console.log('일반라우터');
  res.send('Hello, User');
});

// GET /user 매개변수를 가진 라우터 (맨 아래쪽에 위치해야 함)
router.get('/:id', (req, res) => {
  console.log('매개변수를 가진 라우터');
  console.log(req.params, req.query);
  res.send('Hello, User '+req.params.id);
});


module.exports = router;