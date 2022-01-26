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
    _id: String,
    name: String,
    summary: String,
  },
  //use preexisting collection
  //collection name goes here
  { collection: "listingsAndReviews" }
);

const Listing = mongoose.model("listingsAndReviews", listingSchema);

const findListing = async () => {
  const response = await Listing.findById(10006546);
  console.log(response);
};

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("LISTENING ON 3000");
  findListing();
});
