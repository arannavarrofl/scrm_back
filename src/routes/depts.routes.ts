import { Router } from 'express';
import { createDept, getDeptByID, getDepts, updateDept, deleteDept } from '../controllers/depts.controller';

const router = Router();


//definimos las rutas
router.route('/')
.post(createDept)
.get(getDepts);

//definimos rutas que requieren ID
router.route('/:deptID')
.get(getDeptByID)
.put(updateDept)
.delete(deleteDept);



export default router;