const mongoose = require("mongoose")

const heroSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
});

const hero = mongoose.model("hero", heroSchema);

module.exports = hero;