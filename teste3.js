var data = require("./fakeData");

const deleteUser = (req, res, next) => {
  var name = req.query.name;
  const { user } = req;

  if (user.name != name) {
    throw new Error("You cant delete a user.");
  }

  const userExists = data.find((user) => user.name == name);

  if (!userExists) {
    throw new Error("User does not exists.");
  }

  const filter = data.filter((user) => user.name != name);
  data = filter;

  res.send("success");
};

module.exports = {
  deleteUser,
};
