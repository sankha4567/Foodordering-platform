const users = require("../../../mockbackend/mock.json");

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { resId } = req.query;
  const restaurant = users.restuarants.find(
    (user) => String(user.card.card.info.id) === String(resId)
  );
  if (restaurant) {
    res.json(restaurant);
  } else {
    res.status(404).json({ msg: "not found" });
  }
};
