const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { Error } = require("mongoose");
const sentEmail = require("../Utils/SentEmail");
require("dotenv").config();
console.log(process.env.SECRET);
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "10d" });
};

const signupUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    const user = await User.signup(firstname, lastname, email, password);

    const jsonUser = {
      email: user.email,
      _id: user._id,
    };

    user &&
      res.status(201).json({
        status: "success",
        message: "Account Created Successfully!",
        data: jsonUser,
      });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const loginuser = await User.loginUser(email, password);
    const token = createToken(loginuser._id);
    const jsondata = {
      _id: loginuser._id,
      email: loginuser.email,
      firstname: loginuser.firstname,
      lastname: loginuser.lastname,
      bearertoken: token,
    };
    loginuser &&
      res.status(200).json({
        message: "login Successfully!",
        data: jsondata,
      });
  } catch (error) {
    res.status(400).json({
      message: "login failed",
      Error: error.message,
    });
  }
};
const forgetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const userExits = await User.findOne({ email });
    if (!userExits) {
      return res.status(400).json({
        status: "fail",
        message: "User not found",
      });
    }
    const { _id } = userExits;
    let Random =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let OtpCode = "";
    for (let i = 6; i > 0; i--) {
      OtpCode += Random[Math.floor(Math.random() * Random.length)];
    }
    const codeUpdate = await User.updateOne(
      { _id },
      { $set: { resetPasswordVerificationCode: OtpCode } }
    );
    console.log("otp", OtpCode);
    if (codeUpdate) {
      const emailQuotes = `Dear sir/madam,<br /><br />The verification code to reset your password is below. It is valid for 1 hour.  <q><b></b></q><br />Code: <b>${OtpCode}</b><br /> `;

      const mailOptions = {
        from: "ammar.abdul@logicloopsolutions.net", // sender email
        to: email, // receiver email
        subject: "Verification Code - CARIBE",
        html: emailQuotes,
      };
      sentEmail(mailOptions);
      res.status(200).json({
        status: "success",
        message: `Success! verification code .`,
        data: {
          id: _id,
          email: email,
        },
      });
    } else {
      res.status(400).json({
        status: "failed",
        message: "No user exist with this email",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

const ResetPassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { password, resetPasswordVerificationCode } = req.body;

    const userExist = await User.findOne({ _id: id });
    console.log(
      id,
      userExist,
      "resetPasswordVer",
      resetPasswordVerificationCode,
      "code",
      userExist.resetPasswordVerificationCode
    );

    if (!userExist) {
      return res.status(400).json({
        status: "Reset-Password failed",
        message: "User not found",
      });
    }
    if (password.length < 7 || !password) {
      return res.status(400).json({
        status: "Reset-Password failed",
        message: "Password must not be empty ",
        messageStrong: "Password should be at least 8 characters long",
      });
    }
    if (
      resetPasswordVerificationCode !== userExist.resetPasswordVerificationCode
    ) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid code! Check your email",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const result = await User.updateOne(
      { _id: id },
      {
        $set: {
          password: hash,
          resetPasswordVerificationCode:
            "Password should be at least 8 characters long",
        },
      }
    );
    if (result) {
      res.status(200).json({
        status: "successfuly Updated",
        message: "Password updated successfully. Now login...",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};
const getProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "user not found ",
      });
    }
    let data = {
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
    };
    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      Error: error.message,
    });
  }
};

module.exports = {
  signupUser,
  login,
  forgetPassword,
  ResetPassword,
  getProfile,
};
