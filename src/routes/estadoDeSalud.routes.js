import { Router } from "express";
import { 
    createEstadoSalud, 
    getEstadosDeSalud, 
    getUnEstadoSalud 
} from "../controllers/estadoDeSalud.controller.js";

const router = Router();

router.get('/EstadosDeSalud', getEstadosDeSalud);

router.get('/EstadosDeSalud/:id', getUnEstadoSalud);

router.post('/EstadosDeSalud', createEstadoSalud);

export default router;