import express from "express";
import requireAuth from "../middlewares/requireAuth.js";
import Track from "../models/Track.js";

const router = express.Router();

router.use(requireAuth);

router.get("/tracks", async (req, res) => {
  const tracks = await Track.find({ userId: req.user._id });

  res.send(tracks);
});

export default router;
