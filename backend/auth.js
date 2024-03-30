const jwt = require("jsonwebtoken");
const secret = "Hackathon"

module.exports.createAccessToken = (user) => {
  const data = {
    id: user._id,
    email: user.email,
    isAdmin: user.isAdmin
  };
  return jwt.sign(data, secret, {
    expiresIn: '30d'
  })
}