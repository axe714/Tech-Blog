const router = require('express').Router();
const loggedIn = require('../utils/auth');

router.get('/blog/post', loggedIn, (req, res) => {
  res.render('createBlogForm', {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;