const router = require('express').Router();
const { Blogs } = require('../models');
const loggedIn = require('../utils/auth');

router.put('/blog/update/:blog_id', loggedIn, async (req, res) => {
  try {
    const singleBlog = await Blogs.findOne({
      where: {
        blog_id: req.params.blog_id
      },
    });

    await singleBlog.update({
      blog_title: req.body.blogTitle,
      blog_content: req.body.blogContent,
    });

    res.status(200).json('User updated!');
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
