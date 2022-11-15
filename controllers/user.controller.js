const bcrypt = require('bcrypt');
const User = require("../models/user")
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {

  register: (req, res) => {
    const data = req.body

    const saltRounds = 10
    const hash = bcrypt.hashSync(data.password, saltRounds);
    data.password = hash
    const user = new User(data)
   
    user.save()

    res.json({
      message: "data has been created!!",
    })
  },

  login: async (req, res) => {
    const data = req.body
    const user = await User.findOne({email: data.email})
    const checkPwd = bcrypt.compareSync(data.password, user.password)
    const token = jwt.sign({user}, process.env.TOKEN_KEY)

    if (checkPwd) {
      res.header('x-access-token',token).status(200).json({
        message: "Anda berhasil login",
        token
      })
    } else {
      res.status(400).json({
        message: "Login gagal",
      })
    }
  },
}