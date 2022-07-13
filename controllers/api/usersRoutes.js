const router = require('express').Router();
const { Users } = require('../../models');
const bcrypt = require('bcrypt');

//end point /api/users

//get all users
router.get('/', async (req, res) => {
  try {
    const usersData = await Users.findAll({
      include: [{ all: true, nested: true }],
    });
    res.status(200).json(usersData);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get one user by user id
router.get('/:user_id', async (req, res) => {
  try {
    const userById = await Users.findByPk(req.params.user_id, {
      include: [{ all: true, nested: true }],
    });
    if (!userById) {
      return res.status(404).json({
        message: 'This user ID does not exist. Please enter a valid user ID!',
      });
    }
    res.status(200).json(userById);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//post route for logging in
router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted username
    const userData = await Users.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Unable to locate an account with this username.' });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!validPassword) {
      res.status(400).json({ message: 'Invalid password. Please try again!' });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.user_id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
