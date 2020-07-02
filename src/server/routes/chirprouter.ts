import * as express from "express";
import db from "../../db";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json(await db.Chirps.getChirps());
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    res.json((await db.Chirps.getChirp(parseInt(req.params.id)))[0]);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  try {
    res.json(await db.Chirps.newChirp(req.body.name, req.body.text));
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    res.json(await db.Chirps.deleteChirp(parseInt(req.params.id)));
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.put("/:id", async (req, res) => {
  try {
    res.json(
      await db.Chirps.updateChirp(
        req.body.name,
        req.body.text,
        parseInt(req.params.id)
      )
    );
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

export default router;
