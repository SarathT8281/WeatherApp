const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = require('../Schema/User');

const CreateUser = async (req, res) => {
  const { FirstName, LastName,Mobile, Email, Password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(Password, 10);
    const userExists = await user.findOne({ Email });
    if (userExists) {
      res.json("User already exists");
    } else {
      const userDetails = await user.create({
        FirstName,
        LastName,
        Mobile,
        Email,
        Password: hashedPassword
      });
      res.json({
        FirstName:  userDetails.FirstName,
        LastName:  userDetails.LastName,
        Mobile:   userDetails.Mobile,
        Email:  userDetails.Email,
        Token: tokengenerate( userDetails._id)
      });
    }
  } catch (error) {
    console.error('Error while creating user:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const tokengenerate = (id) => {
  return JWT.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

module.exports = {CreateUser,tokengenerate}