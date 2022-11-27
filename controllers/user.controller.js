const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();

module.exports = {
  // post: /register
  register: (req, res) => {
    let {name, email, password} = req.body;
    let data = { name, email, password};
    try {
      if(name.length  == 0 || email.length <= 3  || password.length == 0){
        return res.status(406).send({"message": "Data given doesn't meet the standards of required fields"})
      }
      const saltRounds = 10;
      const hash = bcrypt.hashSync(data.password, saltRounds);
      data.password = hash;
      console.log(data)
      const user = new User(data);

      user.save();

      res.status(201).json({
        "message": "Sign Up success!",
      });
    } catch (error) {
      res.status(500).json({
        "message": "server error",
        "error": error.message,
      });
    }
  },
  // post: /login
  login: async (req, res) => {
    const data = req.body;
    try {
      const user = await User.findOne({ email: data.email });
      // bisa dibedakan lagi validator untuk username dan password
      if (!user) {
        return res.status(404).json({
          message: "Invalid username/password",
        });
      }
      const checkPwd = bcrypt.compareSync(data.password, user.password);
  
      if (checkPwd) {
        const token = jwt.sign({ user }, process.env.TOKEN_KEY, {
          expiresIn: 86400,
        }); //expires in 24 hours
        res.header("x-access-token", token).status(200).json({
          "message": `Selamat Datang ${user.name.split(" ")[0]}`,
          "token": token,
        });
      } else {
        res.status(400).json({
          "message": "Login gagal",
        });
      }  
    } catch (error) {
      res.status(500).json({
        "message": "server error",
        "error": error.message,
      });
    }
  },

  // get:/
  getAllUser: async (req, res) => {
    try {
      const user = await User.find({}, "-__v -role -createdAt -password -updatedAt");
      // console.log(req.user.user.email)
      res.json({
        message: "get all user success",
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  // get: /:id
  getUserByID: async (req, res) => {
    const { id } = req.params;
    try {
      if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(400).json({ message: "invalid id" });
      const user = await User.findById(id, "-__v -role -createdAt -password -updatedAt").populate('kelas challenge');
      res.status(200).json({
        message: `get ${user.email} success`,
        data: user,
      });
    } catch (error) {
      res.status(404).json({
        message: "user doesn't exist",
        error: error.message,
      });
    }
  },

  // type 2 update: /:id
  updateUserByID2: async (req, res) => {
    const id = req.params.id;
    try {
      const data = req.body;
      // if (data.)
      const user = await User.findById(id, "-_id -__v -role -createdAt -password -updatedAt");
      console.log(user);
      if (data.name) {
        user.name = data.name;
      }
      if (data.email) {
        user.email = data.email;
      }
      if (data.password) {
        user.password = data.password;
      }
      // if (data.role) {
      //   user.role = data.role;
      // }
      if (data.sekolah) {
        user.sekolah = data.sekolah;
      }
      if (data.tgl_lahir) {
        user.tgl_lahir = data.tgl_lahir;
      }
      if (data.jns_kelamin) {
        user.jns_kelamin = data.jns_kelamin;
      }
      for (let item in data.kelas) {
        if (!user.kelas.includes(data.kelas[item])) user.kelas.push(data.kelas[item]);
      }
      for (let item in data.challenge) {
        if (!user.challenge.includes(data.challenge[item])) user.challenge.push(data.challenge[item]);
      }
      if (data.social_media.insta) {
        user.social_media.insta = data.social_media.insta;
      }
      if (data.social_media.fb) {
        user.social_media.fb = data.social_media.fb;
      }
      if (data.social_media.other) {
        user.social_media.other = data.social_media.other;
      }
      await user.updateOne();
      res.status(200).json({
        massage: `user ${user.email} updated`,
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },
  // updatePasswordById: 

  // delete: /:id
  deleteUserByID: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByIdAndDelete(id);
      res.status(200).json({
        message: `user ${user.email} deleted`,
      });
    } catch (error) {
      res.status(404).json({
        message: `user ${user.email} doesn't exist`,
        error: error.message,
      });
    }
  },
};
