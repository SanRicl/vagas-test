var data = require("./fakeData");

const authMiddleware = (req, res, next) => {
  const { job } = req.headers;

  const user = data.find((user) => user.admin);

  if (!user) return res.status(400).json({ erro: "User not found!" });

  req.user = user;

  return next();
};

module.exports = {
  authMiddleware,
};
