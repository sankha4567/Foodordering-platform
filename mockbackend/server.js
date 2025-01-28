const express = require("express");
const users = require("./mock.json");
var cors=require("cors");
const app = express();
const PORT = 7000;

console.log("1");
console.log(users);
app.use(cors({
  origin: '*',
}));
app.get("/api/v1/users", (req, res) => {
  return res.json(users);
});
app.get("/api/v1/restaurants/:resId", async (req, res) => {
  const {resId} =req.params;
  console.log("from server /restaurants/:resId");
  console.log(users);
  const restaurant=users.restuarants.find(user => String(user.card.card.info.id) === String(resId));
  if(restaurant){
    return res.json(JSON.stringify(restaurant));
    
    
  }
  else{
    return res.status(404).json({msg:"not found"});
  }

}).get("/",(req,res)=>{
  res.send("hello world");
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});