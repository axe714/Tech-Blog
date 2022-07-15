const router = require('express').Router();
const { Blogs, Users, Comments } = require('../models');
const loggedIn = require('../utils/auth')

//end point of /blogs/:blog_id
//displays single blogs, along with all comments

router.get('/blogs/:blog_id', loggedIn, async (req, res) => {
  try {
    const blogById = await Blogs.findByPk(req.params.blog_id, {
      include: [{ all: true, nested:true }],
    });

    const blog = blogById.get({ plain: true });
    res.render('singleBlog', {
      blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
