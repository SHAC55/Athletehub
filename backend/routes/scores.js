import express from "express";
import { cricketAll, seriesList, football } from "../controllers/scoreboard.js";

const router = express.Router();
router.get("/cricket/all", cricketAll);
router.get("/cricket/series", seriesList);
router.get("/soccer", football);

export default router;
