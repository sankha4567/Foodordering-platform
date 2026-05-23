const users = require("../../mockbackend/mock.json");

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(users);
};
