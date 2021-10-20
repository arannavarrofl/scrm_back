"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const suppliers_controllers_1 = require("../controllers/suppliers.controllers");
const router = (0, express_1.Router)();
router.route('/')
    .post(suppliers_controllers_1.createSupplier)
    .get(suppliers_controllers_1.getSupliers);
router.route('/:supplierID')
    .get(suppliers_controllers_1.getSupplierByID)
    .put(suppliers_controllers_1.updateSupplier)
    .delete(suppliers_controllers_1.deleteSupplier);
exports.default = router;
