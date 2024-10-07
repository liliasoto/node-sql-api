import { Router } from "express";
import { 
    getMediciones, 
    getMedicionById, 
    getMedicionesByUsuarioId, 
    createMedicion, 
    updateMedicion, 
    deleteMedicion 
} from "../controllers/medicion.controllers.js";

const router = Router();

// Obtener todas las mediciones
router.get('/mediciones', getMediciones);

// Obtener una medición por id de medición
router.get('/mediciones/:id', getMedicionById);

// Obtener todas las mediciones por id de usuario
router.get('/mediciones/usuario/:usuario_id', getMedicionesByUsuarioId);

// Crear una nueva medición
router.post('/mediciones', createMedicion);

// Actualizar una medición por id
router.put('/mediciones/:id', updateMedicion);

// Eliminar una medición por id
router.delete('/mediciones/:id', deleteMedicion);

export default router;
