const { Comments } = require('../models');

const commentsData = [
  {
    user_id: 4,
    blog_id: 1,
    comment_content: `Wow that is amazing. I learned so much, what a cool post.`,
    comment_date: `2022-02-01`,
  },
  {
    user_id: 4,
    blog_id: 2,
    comment_content: `This is almost the coolest thing I've read all day. Thanks for sharing weirdo.`,
    comment_date: `2022-02-16`
  },
  {
    user_id: 4,
    blog_id: 3,
    comment_content: 'What a cool story',
    comment_date: `2022-04-20`,
  },
  {
    user_id: 2,
    blog_id: 1,
    comment_content: `I feel like this is a lie but I just dont know... I guess its ok.`,
    comment_date: `2022-03-20`
  },
  {
    user_id: 3,
    blog_id: 4,
    comment_content: `Good job copy and pasting from the internet. I will be calling the police.`,
    comment_date: `2022-04-15`
  },
  {
    user_id: 3,
    blog_id: 1,
    comment_content: `I give this post a 10 out of 100.`,
    comment_date: `2022-05-02`
  },
  {
    user_id: 1,
    blog_id: 5,
    comment_content: `No way!! That's cool!!`,
    comment_date: `2022-06-22`
  },
  {
    user_id: 2,
    blog_id: 5,
    comment_content: `Yeah right thats not true. The first ever virus was the corona virus.`,
    comment_date: `2022-06-24`
  },
  {
    user_id: 4,
    blog_id: 5,
    comment_content: `I agree with this guy ^^^`,
    comment_date: `2022-07-11`
  },
];

const commentsSeeds = () => Comments.bulkCreate(commentsData);

module.exports = commentsSeeds;
