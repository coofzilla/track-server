import express from "express";
import mongoose from "mongoose";
const { Schema } = mongoose;
//rules for import ECMAScript modules
//extension .js
//package-json   "type": "module"
import { mongoURI } from "../config/dev.js";
const app = express();

mongoose.connect(mongoURI);

const listingSchema = new Schema(
  {
    name: String,
    summary: String,
  },
  //use preexisting collection
  { collection: "listingsAndReviews" }
);

const Listing = mongoose.model("listingsAndReview", listingSchema);

const findListing = async () => {
  const response = await Listing.find({});
  console.log(response);
};

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("LISTENING ON 3000");
  findListing();
});
