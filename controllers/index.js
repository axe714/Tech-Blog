const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const singleBlogHandlebars = require('./singleBlogHandlebars');
const dashboardBlogsHandlebars = require('./dashboardBlogsHandlebars');
const postBlogHandlebars = require('./postBlogHandlebars');
const renderBlogCreation = require('./renderBlogCreation')
const renderCommentCreation = require('./renderCommentCreation')
const postCommentHandlebars = require('./postCommentHandlebars')

const handleBars = [
  homeRoutes,
  singleBlogHandlebars,
  dashboardBlogsHandlebars,
  renderBlogCreation,
  postBlogHandlebars,
  renderCommentCreation,
  postCommentHandlebars,
];

router.use('/', handleBars);
router.use('/api', apiRoutes);

module.exports = router;
