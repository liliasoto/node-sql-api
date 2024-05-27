import { Router } from "express";
import { getNivelSolo, getNivelesSolo } from "../controllers/nivelesSolo.controllers.js";

const router = Router();

router.get('/niveles', getNivelesSolo);

router.get('/niveles/:id', getNivelSolo);


export default router;