const router = require('express').Router();
const { Blogs, Users, Comments } = require('../models');
const loggedIn = require('../utils/auth');

router.get('/dashboard', loggedIn, async (req, res) => {
  try {
    const userBlogs = await Blogs.findAll({
      where: { user_id: req.session.user_id },
    });
    res.render('dashboard', {
      logged_in: req.session.logged_in,
      userBlogs,
    });
    console.log(userBlogs);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
