import cliente from "../controllers/Clientes.js";
import Express from "express";

const router = Express.Router();

router
    .get('/clientes', cliente.list)
    .get('/clientes/:id', cliente.listId)

    .post('/clientes/register', cliente.create)

    .put('/clientes/update/:id', cliente.update)
    
    .delete('/clientes/delete/:id', cliente.exclude)


export default router;