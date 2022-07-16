const { Blogs } = require('../models');

const blogsData = [
  {
    user_id: 1,
    blog_title: 'IBM created the first Smartphone.',
    blog_content: `Although IBM takes the credit for making the first “Smartphone” in the early 1990s, it was in the year 2010-2011 when the “real” Smartphone started to breakout. 
    Concurrently, the mobile phone pioneer Motorola started to penetrate the market by selling smartphones such as Motorola Atrix 4G in 2011. Subsequently, other companies such as Apple, Samsung, and LG join the party from the year 2012 onwards. Simultaneously, Samsung, Apple, and China phones grab the Smartphone market share as of 2020.`,
    creation_date: '2022-01-19',
  },
  {
    user_id: 2,
    blog_title: 'Artificial intelligence is the future.',
    blog_content: `Artificial intelligence is the next “big thing” in the robotics industry. Hence, researchers, scientists, and inventors are working hand in hand to build a robot that can truly mimic human intelligence. Moreover, artificial intelligence is on its way to becoming a reality in the short to medium-term future. For instance, a “Robo-Doctor” can perform surgery on its own, a “Robo-Maid” do all the household chores, a “Robo-Businessman” can create a successful business.`,
    creation_date: '2022-02-14',
  },
  {
    user_id: 3,
    blog_title: 'Google and autonomous driving',
    blog_content: `Google started to develop its self-driving technology in January 2009. Furthermore, Waymo is the original project of Google that became a stand-alone company in December 2016. Today, Waymo LLC is an American autonomous driving technology development company and a wholly-owned subsidiary of Alphabet Inc. Currently, Google is running several self-driving cars on the road in Silicon Valley. Although there are more than 11 accidents occurred from these cars, according to the investigations it is not the fault of the self-driving cars.`,
    creation_date: '2022-03-14',
  },
  {
    user_id: 1,
    blog_title: 'NASAs 1977 Record',
    blog_content:
      'Voyager 1 is currently the farthest device or spacecraft from the earth that is man-made. NASA launched Voyager 1 as a space probe on September 5, 1977. Initially, the mission of Voyager 1 is to fly by Jupiter, Saturn, and Saturn’s largest moon, Titan. Moreover, Voyager 1 observed the weather, magnetic fields, and rings of the two planets. It is also the first probe to take detailed images of their moons. Furthermore, upon completing its mission to fly by on the planets of our solar system, Voyager 1 became the third of five artificial objects to accomplish the escape velocity required to leave the Solar System. Above all, Voyager 1 became the first spacecraft to cross the heliopause and enter the interstellar medium (the matter and radiation that exists in the space between the star systems in a galaxy) on August 25, 2012.',
    creation_date: '2022-04-11',
  },
  {
    user_id: 3,
    blog_title: 'The first ever computer virus',
    blog_content: `In 1971, the first ever computer virus was developed. Named Creeper, it was made as an experiment just to see how it spread between computers. The virus simply displayed the message: “I’m the creeper, catch me if you can!”`,
    creation_date: '2022-06-01',
  },
];

const seedBlogs = () => Blogs.bulkCreate(blogsData);

module.exports = seedBlogs;
