const { Comments } = require('../models');

const commentsData = [
  {
    user_id: 3,
    blog_id: 1,
    comment_content: 'This comment is on the first blog. DID IT WORK?',
  },
  {
    user_id: 3,
    blog_id: 1,
    comment_content: 'Second comment on the first blog.... ',
  },
  {
    user_id: 3,
    blog_id: 1,
    comment_content: 'Third comment on the first blog.....',
  },
  {
    user_id: 4,
    blog_id: 2,
    comment_content: 'This comment is on the second blog... IT WORKED RIGHT???',
  },
  {
    user_id: 3,
    blog_id: 2,
    comment_content: 'Second comment on the second blog......',
  },
];

const commentsSeeds = () => Comments.bulkCreate(commentsData);

module.exports = commentsSeeds;
