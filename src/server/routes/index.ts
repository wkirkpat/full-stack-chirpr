import * as express from "express";
import chirprouter from "./chirprouter";
import mentionrouter from "./mentionrouter";

const router = express.Router();

router.use("/chirps", chirprouter);
router.use("/mentions", mentionrouter);

export default router;
