const router = require('express').Router();
const { Blogs } = require('../models');
const loggedIn = require('../utils/auth');

//renders all users blog at user's dashboard
router.get('/dashboard', loggedIn, async (req, res) => {
  try {
    const userBlogs = await Blogs.findAll({
      where: { user_id: req.session.user_id },
    });
    res.render('dashboard', {
      logged_in: req.session.logged_in,
      userBlogs,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
