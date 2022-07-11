const { Comments } = require('../models');

const commentsData = [
  {
    user_id: 3,
    post_id: 1,
    comment_content: 'This comment is on the first post. DID IT WORK?',
  },
  {
    user_id: 4,
    post_id: 2,
    comment_content: 'This comment is on the second post... IT WORKED RIGHT???',
  },
];

const commentsSeeds = () => Comments.bulkCreate(commentsData);

module.exports = commentsSeeds;
