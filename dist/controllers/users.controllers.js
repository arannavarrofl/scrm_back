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
exports.deleteUser = exports.updateUser = exports.getUserByID = exports.getUsers = exports.createUser = void 0;
const database_1 = require("../database");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO departments SET?', [newUser]);
        return res.json({ message: "Usuario guardado exitosamente" });
    });
}
exports.createUser = createUser;
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const users = yield conn.query('SELECT * FROM users');
        return res.json(users[0]);
    });
}
exports.getUsers = getUsers;
function getUserByID(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.deptID;
        const conn = yield (0, database_1.connect)();
        const users = yield conn.query('SELECT * FROM departments WHERE userID = ?', [id]);
        return res.json(users[0]);
    });
}
exports.getUserByID = getUserByID;
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.deptID;
        const user = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE users SET ? WHERE userID = ?', [user, id]);
        return res.json({ message: "Usuario actualizado exitosamente" });
    });
}
exports.updateUser = updateUser;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.deptID;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM users WHERE userID = ?', [id]);
        return res.json({ message: "Usuario eliminado exitosamente" });
    });
}
exports.deleteUser = deleteUser;
