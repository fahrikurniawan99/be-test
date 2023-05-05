const User = require("../user/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const payload = req.body;
    let hashedPassword;
    if (payload.password) {
      hashedPassword = await bcrypt.hash(payload.password, 10);
    }
    const user = new User(payload);
    user.password = hashedPassword;
    await user.save();
    return res.status(201).json({ message: "success register" });
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const payload = req.body;
    const user = await User.findOne({ email: payload.email });
    if (!user) {
      return res.status(400).json({ message: "email or password incorect" });
    }
    const passwordIsMatch = await bcrypt.compare(
      payload.password,
      user.password
    );
    if (!passwordIsMatch) {
      return res.status(400).json({ message: "email or password incorect" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    return res.status(200).json({
      data: {
        fullname: user.fullname,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};
