import * as express from "express";
import db from "../db"

const router = express.Router();

router.get("/chirps", async (req, res) => {
    try{
        res.json(await db.Chirps.getChirps());
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
})

router.get("/chirps/:id", async (req, res) => {
    try{
        res.json((await db.Chirps.getChirp(parseInt(req.params.id)))[0]);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
})

// router.post("/chirps", async (req, res) => {
//     try{
//         res.json(await db.Chirps.newUser(req.body.name));
//         res.json(await db.Chirps.newChirp(req.body.text, 1));
//     } catch(err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// })

router.delete("/chirps/:id", async (req, res) => {
    try{
        res.json(await db.Chirps.deleteChirp(parseInt(req.params.id)));
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
})

// router.put("/chirps/:id", async (req, res) => {
//     try{
//         res.json(await db.Chirps.deleteChirp(parseInt(req.params.id)));
//     } catch(err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// })

export default router;
