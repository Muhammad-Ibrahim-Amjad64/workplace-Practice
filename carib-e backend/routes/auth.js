const headers = require("./../Middleware/Checkauth");
const {
  signupUser,
  login,
  forgetPassword,
  ResetPassword,
  getProfile,
} = require("../Controller/UsersControler");
const router = require("express").Router();

router.post("/signup", signupUser);

router.get("/profile/:id", headers, getProfile);
router.post("/login", login);
router.post("/forget_password", forgetPassword);
router.patch("/Reset_password/:id", ResetPassword);

module.exports = router;
