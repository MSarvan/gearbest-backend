const app = require("./index");
const connect = require("./configs/db");

require("dotenv").config();

const port = process.env.PORT || 7890;

app.listen(port, async () => {
  await connect();
  console.log("Hai dear friend i am listening 7890");
});
