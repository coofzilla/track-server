import mongoose from "mongoose";
const { Schema } = mongoose;

const pointSchema = new Schema({
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number,
  },
});

const trackSchema = new Schema({
  userId: {
    //ref to other object stored in Mongo DB
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    default: "",
  },
  locations: [pointSchema],
});

const Track = mongoose.model("Track", trackSchema);

export default Track;
