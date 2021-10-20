"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controllers_1 = require("../controllers/users.controllers");
const router = (0, express_1.Router)();
//definimos la ruta
router.route('/')
    .post(users_controllers_1.createUser)
    .get(users_controllers_1.getUsers);
//definimos las rutas que necesitan ID
router.route('/:userID')
    .get(users_controllers_1.getUserByID)
    .put(users_controllers_1.updateUser)
    .delete(users_controllers_1.deleteUser);
exports.default = router;
