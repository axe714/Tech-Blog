const router = require('express').Router();
const { Users } = require('../../models');

//end point /api/users

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

router.get('/:id', async (req, res) => {
  try {
    const userById = await Users.findByPk(req.params.id, {
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

router.post

module.exports = router;
