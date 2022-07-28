import express from "express";
import { CreateProduct, DeleteProduct, getProductById, getProducts, UpdateProduct } from "../controller/ProductContr.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.post('/product', verifyUser, CreateProduct);
router.patch('/product/:id', verifyUser, UpdateProduct);
router.delete('/product/:id', verifyUser, DeleteProduct);
router.get('/product', verifyUser, getProducts);
router.get('/product/:id', verifyUser, getProductById);


export default router;