import { Router } from "express";
import { createContactoSolo, getContactoSolo, getContactosSolo } from "../controllers/contactosSolo.controllers.js";

const router = Router();

router.get('/contactos', getContactosSolo);

router.get('/contactos/:id', getContactoSolo);

router.post('/contactos', createContactoSolo);

export default router;