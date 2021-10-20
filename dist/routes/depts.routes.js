"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const depts_controller_1 = require("../controllers/depts.controller");
const router = (0, express_1.Router)();
//definimos las rutas
router.route('/')
    .post(depts_controller_1.createDept)
    .get(depts_controller_1.getDepts);
//definimos rutas que requieren ID
router.route('/:deptID')
    .get(depts_controller_1.getDeptByID)
    .put(depts_controller_1.updateDept)
    .delete(depts_controller_1.deleteDept);
exports.default = router;
