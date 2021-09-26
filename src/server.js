const mongoose = require("mongoose");
const port = 5000 || process.env.port;
const app = require("./app");

mongoose.connect("mongodb://localhost:27017/mongo");
app.listen(port, () => {
  console.log(`the hike server started at port ${port}`);
});
