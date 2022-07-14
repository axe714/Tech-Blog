//These are all the view routes for your application
const router = require('express').Router();
const { Blogs, Users } = require('../models');

//renders all blogs on homepage
router.get('/', async (req, res) => {
  try {
    const blogsData = await Blogs.findAll({
      include: [{ model: Users }],
    });

    const blogs = blogsData.map((blogs) =>
    blogs.get({ plain: true })
    );
    res.render('home', {
      blogs,
      logged_in: req.session.logged_in,
    })
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
