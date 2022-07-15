const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const renderSingleBlog = require('./renderSingleBlog');
const renderDashboard = require('./renderDashboard');
const postBlogRoute = require('./postBlogRoute');
const renderBlogCreation = require('./renderBlogCreation')
const renderCommentCreation = require('./renderCommentCreation')
const postCommentRoute = require('./postCommentRoute')
const deleteBlogRoute = require('./deleteBlogRoute')

const handleBars = [
  homeRoutes,
  renderSingleBlog,
  renderDashboard,
  renderBlogCreation,
  postBlogRoute,
  renderCommentCreation,
  postCommentRoute,
  deleteBlogRoute,
];

router.use('/', handleBars);
router.use('/api', apiRoutes);

module.exports = router;
