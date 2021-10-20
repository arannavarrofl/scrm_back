import {Request,Response} from 'express';
import {connect} from '../database';
import {Supplier} from '../interface/suppliers.interface';


export async function createSupplier(req:Request, res:Response) {
    const newSupplier: Supplier = req.body
    const conn = await connect();
    await conn.query('INSERT INTO suppliers SET?',[newSupplier]);
    return res.json({message:"Proveedor guardado exitosamente"});
}

export async function getSupliers(req:Request, res: Response): Promise<Response> {
    const conn = await connect();
    const suppliers = await conn.query('SELECT * FROM suppliers');
    return res.json(suppliers[0]);
}

export async function getSupplierByID(req:Request, res:Response): Promise<Response>{
    const id = req.params.supplierID;
    const conn = await connect();
    const suppliers = await conn.query('SELECT * FROM suppliers WHERE supplierID = ?',[id]);
    return res.json(suppliers[0]); 
}

export async function updateSupplier(req:Request, res:Response): Promise<Response>{
    const id = req.params.supplierID;
    const supplier:Supplier = req.body;
    const conn = await connect();
    await conn.query('UPDATE suppliers SET ? WHERE supplierID = ?',[supplier,id]);
    return res.json({message: "Proveedor actualizado exitosamente"}); 
}

export async function deleteSupplier(req:Request, res:Response): Promise<Response>{
    const id = req.params.supplierID;
    const conn = await connect();
    await conn.query('DELETE FROM suppliers WHERE supplierID = ?',[id]);
    return res.json({message: "Proveedor eliminado exitosamente"}); 
}
