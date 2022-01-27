import express from "express";
import User from "../models/user.js";
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.create({ email, password });

  res.send("made post request");
});

export default router;
