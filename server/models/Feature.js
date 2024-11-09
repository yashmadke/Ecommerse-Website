const mongoose = require("mongoose");

const FeatureSchema = new mongoose.Schema(
  {
    image: String,
    imageExtension: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feature", FeatureSchema);
