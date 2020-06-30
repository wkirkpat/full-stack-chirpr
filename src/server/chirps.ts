
import * as express from "express"
import chirpStore from "./chirpstore";

let router = express.Router();

router.get("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  res.json(chirpStore.GetChirp(id));
})

router.get("/", (req, res) => {
    res.send(chirpStore.GetChirps());
});

router.post("/", (req, res) => {
  chirpStore.CreateChirp(req.body);
  res.send("Created");
});

router.put("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  chirpStore.UpdateChirp(id, req.body);
  res.send("updated");
});

router.delete("/:id", (req, res) => {
  let id =  parseInt(req.params.id);
  chirpStore.DeleteChirp(id);
  res.send("deleted");
});

export default router;
