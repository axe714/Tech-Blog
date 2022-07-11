const { Posts } = require('../models');

const postsData = [
  {
    user_id: 1,
    post_title: 'Today is my birthday!',
    post_content: 'Happy birthday to me! Hope this actually works...',
    creation_date: '2022-06-01',
  },
  {
    user_id: 2,
    post_title: 'Testing out this title...',
    post_content: 'Please tell me this actually works. Please for the love of god!',
    creation_date: '2022-02-14',
  },
];

const seedPosts = () => Posts.bulkCreate(postsData);

module.exports = seedPosts;
