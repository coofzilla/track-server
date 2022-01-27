import express from "express";
import mongoose from "mongoose";
import handleError from "../utils/handleError.js";
import authroutes from "../routes/authRoutes.js";
import requireAuth from "../middlewares/requireAuth.js";

//for import ECMAScript modules
//extension .js ADD TO END OF FILE PATH
//package-json   "type": "module"
import { mongoURI } from "../config/dev.js";
const app = express();
app.use(express.json());

app.use(authroutes);

//error handling f/initial
try {
  await mongoose.connect(mongoURI);
  console.log("CONNECTED TO MONGO");
} catch (err) {
  handleError(err);
}
//error handling after established connection
mongoose.connection.on("error", (err) => handleError(err));

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("LISTENING ON 3000");
});
