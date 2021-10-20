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
exports.deleteRole = exports.updateRole = exports.getRoleByID = exports.getRoles = exports.createRole = void 0;
const database_1 = require("../database");
function createRole(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newRole = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO departments SET?', [newRole]);
        return res.json({ message: "Rol de usuario guardado exitosamente" });
    });
}
exports.createRole = createRole;
function getRoles(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const roles = yield conn.query('SELECT * FROM roles');
        return res.json(roles[0]);
    });
}
exports.getRoles = getRoles;
function getRoleByID(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.roleID;
        const conn = yield (0, database_1.connect)();
        const roles = yield conn.query('SELECT * FROM roles WHERE roleID = ?', [id]);
        return res.json(roles[0]);
    });
}
exports.getRoleByID = getRoleByID;
function updateRole(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.roleID;
        const role = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE roles SET ? WHERE roleID = ?', [role, id]);
        return res.json({ message: "Rol actualizado exitosamente" });
    });
}
exports.updateRole = updateRole;
function deleteRole(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.deptID;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM roles WHERE roleID = ?', [id]);
        return res.json({ message: "Rol eliminado exitosamente" });
    });
}
exports.deleteRole = deleteRole;
