import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("made post request");
});

export default router;
