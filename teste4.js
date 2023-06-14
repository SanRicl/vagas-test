var data = require("./fakeData");

const updateUser = (req, res, next) => {
  const name = req.query.name;
  const job = req.query.job;
  const { user } = req;

  if (user.name != name) {
    throw new Error("You cant update a user.");
  }

  const reg = data.find((d) => id == id);
  reg.name = req.body.name;
  reg.job = req.body.job;

  res.send(reg);
};

module.exports = {
  updateUser,
};
