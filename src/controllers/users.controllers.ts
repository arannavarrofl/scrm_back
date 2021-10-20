import { Request, Response } from 'express';
import {connect} from '../database';
import { User } from '../interface/users.interface';

export async function createUser(req:Request, res:Response): Promise<Response>{
    const newUser:User = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO departments SET?',[newUser]);
    return res.json({message :"Usuario guardado exitosamente"}); 
}

export async function getUsers(req:Request, res:Response): Promise<Response>{
    const conn = await connect();
    const users = await conn.query('SELECT * FROM users');
    return res.json(users[0]); 
}

export async function getUserByID(req:Request, res:Response): Promise<Response>{
    const id = req.params.deptID;
    const conn = await connect();
    const users = await conn.query('SELECT * FROM departments WHERE userID = ?',[id]);
    return res.json(users[0]); 
}

export async function updateUser(req:Request, res:Response): Promise<Response>{
    const id = req.params.deptID;
    const user:User = req.body;
    const conn = await connect();
    await conn.query('UPDATE users SET ? WHERE userID = ?',[user,id]);
    return res.json({message: "Usuario actualizado exitosamente"}); 
}

export async function deleteUser(req:Request, res:Response): Promise<Response>{
    const id = req.params.deptID;
    const conn = await connect();
    await conn.query('DELETE FROM users WHERE userID = ?',[id]);
    return res.json({message: "Usuario eliminado exitosamente"}); 
}

//--LOGIN

