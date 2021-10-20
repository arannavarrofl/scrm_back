"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roles_controller_1 = require("../controllers/roles.controller");
const router = (0, express_1.Router)();
router.route('/')
    .post(roles_controller_1.createRole)
    .get(roles_controller_1.getRoles);
router.route('/:roleID')
    .get(roles_controller_1.getRoleByID)
    .put(roles_controller_1.updateRole)
    .delete(roles_controller_1.deleteRole);
exports.default = router;
