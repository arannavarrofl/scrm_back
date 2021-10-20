import {Request, Response} from 'express';
import { connect } from '../database';
import {Role} from '../interface/roles.interface';

export async function createRole(req:Request, res: Response) {
    const newRole: Role = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO departments SET?',[newRole]);
    return res.json({message :"Rol de usuario guardado exitosamente"});
}

export async function getRoles(req: Request, res: Response): Promise<Response> {
     const conn = await connect();
     const roles = await conn.query('SELECT * FROM roles');
     return res.json(roles[0]); 
}

export async function getRoleByID(req:Request, res:Response): Promise<Response>{
    const id = req.params.roleID;
    const conn = await connect();
    const roles = await conn.query('SELECT * FROM roles WHERE roleID = ?',[id]);
    return res.json(roles[0]); 
}

export async function updateRole(req:Request, res:Response): Promise<Response>{
    const id = req.params.roleID;
    const role:Role = req.body;
    const conn = await connect();
    await conn.query('UPDATE roles SET ? WHERE roleID = ?',[role,id]);
    return res.json({message: "Rol actualizado exitosamente"}); 
}

export async function deleteRole(req:Request, res:Response): Promise<Response>{
    const id = req.params.deptID;
    const conn = await connect();
    await conn.query('DELETE FROM roles WHERE roleID = ?',[id]);
    return res.json({message: "Rol eliminado exitosamente"}); 
}
