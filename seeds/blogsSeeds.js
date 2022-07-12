const { Blogs } = require('../models');

const blogsData = [
  {
    user_id: 1,
    blog_title: 'Today is my birthday!',
    blog_content: 'Happy birthday to me! Hope this actually works...',
    creation_date: '2022-06-01',
  },
  {
    user_id: 2,
    blog_title: 'Testing out this title...',
    blog_content: 'Please tell me this actually works. Please for the love of god!',
    creation_date: '2022-02-14',
  },
];

const seedBlogs = () => Blogs.bulkCreate(blogsData);

module.exports = seedBlogs;
