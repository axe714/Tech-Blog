const { Comments } = require('../models');

const commentsData = [
  {
    user_id: 4,
    blog_id: 1,
    comment_content: `Wow that is amazing. I learned so much, what a cool post.`,
  },
  {
    user_id: 4,
    blog_id: 2,
    comment_content: `This is almost the coolest thing I've read all day. Thanks for sharing weirdo.`
  },
  {
    user_id: 4,
    blog_id: 3,
    comment_content: 'What a cool story',
  },
  {
    user_id: 2,
    blog_id: 1,
    comment_content: `I feel like this is a lie but I just dont know... I guess its ok.`,
  },
  {
    user_id: 3,
    blog_id: 4,
    comment_content: `Good job copy and pasting from the internet. I will be calling the police.`
  },
  {
    user_id: 3,
    blog_id: 1,
    comment_content: `I give this post a 10 out of 100.`
  },
  {
    user_id: 1,
    blog_id: 5,
    comment_content: `No way!! That's cool!!`
  },
  {
    user_id: 2,
    blog_id: 5,
    comment_content: `Yeah right thats not true. The first ever virus was the corona virus.`
  },
  {
    user_id: 4,
    blog_id: 5,
    comment_content: `I agree with this guy ^^^`
  },
];

const commentsSeeds = () => Comments.bulkCreate(commentsData);

module.exports = commentsSeeds;
