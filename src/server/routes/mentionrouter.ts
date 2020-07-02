import * as express from "express";
import db from "../../db";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    res.json(await db.Chirps.newMention(req.body.mention));
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    res.json(await db.Chirps.getMentions(req.params.id));
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

export default router;
