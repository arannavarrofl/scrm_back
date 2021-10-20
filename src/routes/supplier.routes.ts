import {Router} from 'express';
import { createSupplier, deleteSupplier, getSupliers, getSupplierByID, updateSupplier } from '../controllers/suppliers.controllers';

const router = Router();

router.route('/')
.post(createSupplier)
.get(getSupliers);

router.route('/:supplierID')
.get(getSupplierByID)
.put(updateSupplier)
.delete(deleteSupplier)

export default router;