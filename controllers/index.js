const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const singleBlogHandlebars = require('./singleBlogHandlebars');
const dashboardBlogsHandlebars = require('./dashboardBlogsHandlebars');
const postBlogHandlebars = require('./postBlogHandlebars');
const renderBlogCreation = require('./renderBlogCreation')

const handleBars = [
  homeRoutes,
  singleBlogHandlebars,
  dashboardBlogsHandlebars,
  renderBlogCreation,
  postBlogHandlebars,
];

router.use('/', handleBars);
router.use('/api', apiRoutes);

module.exports = router;
