const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const singleBlogHandlebars = require('./singleBlogHandlebars');
const dashboardBlogsHandlebars = require('./dashboardBlogsHandlebars')

const handleBars = [homeRoutes, singleBlogHandlebars, dashboardBlogsHandlebars];

router.use('/', handleBars);
router.use('/api', apiRoutes);

module.exports = router;
