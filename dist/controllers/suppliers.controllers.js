"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSupplier = exports.updateSupplier = exports.getSupplierByID = exports.getSupliers = exports.createSupplier = void 0;
const database_1 = require("../database");
function createSupplier(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newSupplier = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO suppliers SET?', [newSupplier]);
        return res.json({ message: "Proveedor guardado exitosamente" });
    });
}
exports.createSupplier = createSupplier;
function getSupliers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const suppliers = yield conn.query('SELECT * FROM suppliers');
        return res.json(suppliers[0]);
    });
}
exports.getSupliers = getSupliers;
function getSupplierByID(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.supplierID;
        const conn = yield (0, database_1.connect)();
        const suppliers = yield conn.query('SELECT * FROM suppliers WHERE supplierID = ?', [id]);
        return res.json(suppliers[0]);
    });
}
exports.getSupplierByID = getSupplierByID;
function updateSupplier(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.supplierID;
        const supplier = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE suppliers SET ? WHERE supplierID = ?', [supplier, id]);
        return res.json({ message: "Proveedor actualizado exitosamente" });
    });
}
exports.updateSupplier = updateSupplier;
function deleteSupplier(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.supplierID;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM suppliers WHERE supplierID = ?', [id]);
        return res.json({ message: "Proveedor eliminado exitosamente" });
    });
}
exports.deleteSupplier = deleteSupplier;
