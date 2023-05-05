const jwt = require("jsonwebtoken");
const User = require("../api/v1/user/model");

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  let token;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  }


  if (!token) {
    return res.status(401).json({ message: "token is required" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;
    
    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ message: "invalid token" });
    }

    req.user = {
      email: user.email,
      userId,
      gender: user.gender,
      fulllname: user.fullname,
    };

    return next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};


module.exports = {
    authenticate
}