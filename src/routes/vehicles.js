import vehicle from "../controllers/Vehicles.js";
import Express from "express";

const router = Express.Router();

router
    .get('/vehicles', vehicle.list)
    .get('/vehicles/:id', vehicle.listId)

    .post('/vehicles/register', vehicle.create)

    .put('/vehicles/update/:id', vehicle.update)
    
    .delete('/vehicles/delete/:id', vehicle.exclude)


export default router;