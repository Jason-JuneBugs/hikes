const mongoose = require("mongoose");
const { Schema } = mongoose;

const hikeSchema = new Schema({
  title: { type: String, required: true },
  address: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
});

const HikeModel = mongoose.model("HikeModel", hikeSchema);
module.exports = HikeModel;
