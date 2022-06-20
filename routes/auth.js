const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    // encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });
    // save user
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json('user not found');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    !validPassword && res.status(404).json('wrong password');

    res.status(200).json(user);
  } catch (error) {
    // console.log(error);
    res.status(500).json(error);
  }
});
module.exports = router;
