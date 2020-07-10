const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
  name: String,
  ref: String,
  size: Number,
  description: String,
  price: Number,
  image : {
      type : String,
    default : "/medias/img/shoe.png"},
  category: {
      type : String,
        Enum : ["men", "women", "kids"]
  },
  id_tags: {
      type : Schema.Types.ObjectId,
      ref : "Tag"
  }
});

const sneakerModel = mongoose.model("Sneaker", sneakerSchema);

module.exports = sneakerModel;