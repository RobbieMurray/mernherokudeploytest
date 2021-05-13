const express = require("express");
const router = express.Router();

const User = require("../modules/User");

router.get("/", (req, res) => {
  User.find()
    .then((user) => res.json(users))
    .catch((err) => console.error(err));
});

router.post("/", (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({
    name: name,
    email: email,
  });
  newUser
    .save()
    .then(() =>
      res.json({
        message: "User created successfully",
      })
    )
    .catch((err) =>
      res.status(400).json({
        error: err,
        message: "Error creating an account",
      })
    );
});
