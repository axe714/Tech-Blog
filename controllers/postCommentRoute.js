const router = require('express').Router();
const { Comments } = require('../models');
const loggedIn = require('../utils/auth');

router.post('/comment/create', loggedIn, async (req, res) => {
  try {
    const createBlog = await Comments.create({
      user_id: req.session.user_id,
      blog_id: req.body.blog_id,
      comment_content: req.body.commentContent
    });
    return res.status(200).json(createBlog);
  } catch (err) {
    return res.status(400).json({
      message: 'Unable to post comment on blog',
    });
  }
});

module.exports = router;