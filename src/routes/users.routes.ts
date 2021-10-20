import { Router } from "express";
import { createUser, deleteUser, getUserByID, getUsers, updateUser } from "../controllers/users.controllers";

const router = Router();

//definimos la ruta

router.route('/')
.post(createUser)
.get(getUsers);

//definimos las rutas que necesitan ID

router.route('/:userID')
.get(getUserByID)
.put(updateUser)
.delete(deleteUser);

export default router;
