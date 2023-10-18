const express = require('express');
const User = require('../models/user');
const Comment = require('../models/comment');
const router = express.Router();
const {sequelize} = require('../models/index');

router.route('/')
  .get(async (req, res, next) => {
    try {
      const users = await User.findAll();
      console.log('User.findAll : ', users);
      const [result, metadata] = await sequelize.query('select * from users');
      console.log('-----------------------------------------');
      console.log(result);
      console.log('###########################################');
      console.log(metadata);
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const user = await User.create({
        name: req.body.name,
        age: req.body.age,
        married: req.body.married,
      });
      console.log(user);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router.get('/:id/comments', async (req, res, next) => {
  try {
    const comments = await Comment.findAll({
      include: {
        model: User,
        where: { id: req.params.id },
      },
    });
    console.log(comments);
    res.json(comments);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;