const router = require('express').Router();
const { Blogs } = require('../models');
const loggedIn = require('../utils/auth');

const today = new Date();
const dateFormatter = today.toISOString().slice(0, 10) + '"';

router.post('/blog/create', loggedIn, async (req, res) => {
  try {
    const createBlog = await Blogs.create({
      user_id: req.session.user_id,
      blog_title: req.body.blogTitle,
      blog_content: req.body.blogContent,
      creation_date: dateFormatter
    });
    console.log(createBlog)
    return res.status(200).json(createBlog);
  } catch (err) {
    return res.status(500).json({
      message: 'Unable to create blog',
    });
  }
});

module.exports = router;
