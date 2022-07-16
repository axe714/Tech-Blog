const router = require('express').Router();
const { Blogs } = require('../models');
const loggedIn = require('../utils/auth');

router.put('/blog/update/:blog_id', loggedIn, async (req, res) => {
  try {
    const singleBlog = await Blogs.findOne({
      where: {
        blog_id: req.params.blog_id,
      },
    });

    await singleBlog.update({
      blog_title: req.body.blogTitle,
      blog_content: req.body.blogContent,
    });

    res.status(200).json('Blog updated!');
  } catch (err) {
    return res.status(400).json({
      message: 'Unable to update blog',
    });
  }
});

module.exports = router;
