const router = require('express').Router();
const { Comments } = require('../models');
const loggedIn = require('../utils/auth');

const today = new Date();
const dateFormatter = '"' + today.toISOString().slice(0, 10) + '"';

router.post('/comment/create', loggedIn, async (req, res) => {
  try {
    const createBlog = await Comments.create({
      user_id: req.session.user_id,
      blog_id: req.body.blog_id,
      comment_content: req.body.commentContent,
      comment_date: dateFormatter
    });
    return res.status(200).json(createBlog);
  } catch (err) {
    return res.status(400).json({
      message: 'Unable to post comment on blog',
    });
  }
});

module.exports = router;