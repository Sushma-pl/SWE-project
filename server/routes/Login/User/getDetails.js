const express = require("express");
const getDetails = express.Router();

const User = require("../../models/user");

getDetails.get("/getDetails", (req, res) => {
  User.findOne(
    { email: req.session.passport.user.email },
    function (err, user) {
      if (err) console.log(err);

      const { username } = user;

      res.status(200).send({
        username,
      });
    }
  );
});

module.exports = getDetails;
