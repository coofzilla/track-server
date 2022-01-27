import mongoose from "mongoose";
const { Schema } = mongoose;

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
};
export default Listing;
