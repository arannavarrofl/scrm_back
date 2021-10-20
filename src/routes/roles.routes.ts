import { Router } from 'express';
import {createRole, deleteRole, getRoleByID, getRoles, updateRole} from '../controllers/roles.controller'

const router = Router();


router.route('/')
.post(createRole)
.get(getRoles);


router.route('/:roleID')
.get(getRoleByID)
.put(updateRole)
.delete(deleteRole);

export default router;