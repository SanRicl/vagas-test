var data = require("./fakeData");



const userAccess = (req, res) => {
  var name = req.query.name;

  const userFound = data.filter((user) => user.name === name);

  res.send(`Usuário ${name} foi lido ${userFound.length} vezes.`);
};

module.exports = {
  userAccess,
};
