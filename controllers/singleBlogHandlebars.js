const router = require('express').Router();
const { Blogs, Users, Comments } = require('../models');

//end point of /blogs/:blog_id
//displays single blogs, along with all comments

router.get('/blogs/:blog_id', async (req, res) => {
  try {
    const blogById = await Blogs.findByPk(req.params.blog_id, {
      include: [{ all: true, nested:true }],
    });

    const blog = blogById.get({ plain: true });
    res.render('singleBlog', {
      blog,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
