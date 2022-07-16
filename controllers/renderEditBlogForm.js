const router = require('express').Router();
const { Blogs } = require('../models');
const loggedIn = require('../utils/auth');

//render blog creation form
router.get('/blog/update/:blog_id', loggedIn, async (req, res) => {
  const blog = await Blogs.findByPk(req.params.blog_id);
  res.render('updateBlogForm', {
    blog,
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
