import {Request, Response} from 'express';
import { connect } from '../database';
import {Department } from '../interface/depts.interface';
 

export async function createDept(req:Request, res:Response): Promise<Response>{
    const newDept:Department = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO departments SET?',[newDept]);
    return res.json({message :"Departamento guardado exitosamente"}); 
}

export async function getDepts(req:Request, res:Response): Promise<Response>{
    const conn = await connect();
    const depts = await conn.query('SELECT * FROM departments');
    return res.json(depts[0]); 
}

export async function getDeptByID(req:Request, res:Response): Promise<Response>{
    const id = req.params.deptID;
    const conn = await connect();
    const depts = await conn.query('SELECT * FROM departments WHERE deptID = ?',[id]);
    return res.json(depts[0]); 
}

export async function updateDept(req:Request, res:Response): Promise<Response>{
    const id = req.params.deptID;
    const dept:Department = req.body;
    const conn = await connect();
    await conn.query('UPDATE departments SET ? WHERE deptID = ?',[dept,id]);
    return res.json({message: "Departamento actualizado exitosamente"}); 
}

export async function deleteDept(req:Request, res:Response): Promise<Response>{
    const id = req.params.deptID;
    const conn = await connect();
    await conn.query('DELETE FROM departments WHERE deptID = ?',[id]);
    return res.json({message: "Departamento eliminado exitosamente"}); 
}