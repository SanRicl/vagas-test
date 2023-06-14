var data = require("./fakeData");

const getUser = (req, res, next) => {
    var name =  req.query.name;

  const userExists = data.find((user) => user.name == name);

  if (!userExists) {
    throw new Error("User does not exists.");
  }

  res.json(userExists);
};

const getUsers = (req, res, next) => {
  if (data.length <= 0) {
    throw new Error("There's no users.");
  }
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
