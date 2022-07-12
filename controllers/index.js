const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const singleBlogHandlebars = require('./singleBlogHandlebars');

const handleBars = [homeRoutes, singleBlogHandlebars];

router.use('/', handleBars);
router.use('/api', apiRoutes);

module.exports = router;
