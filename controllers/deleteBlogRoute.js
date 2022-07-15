const router = require('express').Router();
const { Blogs } = require('../models');
const loggedIn = require('../utils/auth');

router.delete('/blog/delete', loggedIn, async (req, res) => {
  try {
    const deleteBlog = await Blogs.destroy({
      where: { blog_id: req.body.blog_id },
    });
    // console.log(createBlog)
    return res.status(200).json(deleteBlog);
  } catch (err) {
    return res.status(500).json({
      message: 'Unable to delete blog',
    });
  }
});

module.exports = router;
