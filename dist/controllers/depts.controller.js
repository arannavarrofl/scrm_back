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
exports.deleteDept = exports.updateDept = exports.getDeptByID = exports.getDepts = exports.createDept = void 0;
const database_1 = require("../database");
function createDept(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newDept = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO departments SET?', [newDept]);
        return res.json({ message: "Departamento guardado exitosamente" });
    });
}
exports.createDept = createDept;
function getDepts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const depts = yield conn.query('SELECT * FROM departments');
        return res.json(depts[0]);
    });
}
exports.getDepts = getDepts;
function getDeptByID(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.deptID;
        const conn = yield (0, database_1.connect)();
        const depts = yield conn.query('SELECT * FROM departments WHERE deptID = ?', [id]);
        return res.json(depts[0]);
    });
}
exports.getDeptByID = getDeptByID;
function updateDept(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.deptID;
        const dept = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE departments SET ? WHERE deptID = ?', [dept, id]);
        return res.json({ message: "Departamento actualizado exitosamente" });
    });
}
exports.updateDept = updateDept;
function deleteDept(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.deptID;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM departments WHERE deptID = ?', [id]);
        return res.json({ message: "Departamento eliminado exitosamente" });
    });
}
exports.deleteDept = deleteDept;
