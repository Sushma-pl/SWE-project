const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if (!req.cookies.token) {
    return res.json({});
  }
  const payload = jwt.verify(req.cookies.token, secret);
  User.findById(payload.id).then((userInfo) => {
    if (!userInfo) {
      return res.json({});
    }
    res.json({ id: userInfo._id, email: userInfo.email });
  });
});
module.exports = router;
