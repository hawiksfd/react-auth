import express from "express";
import { CreateProduct, DeleteProduct, getProductById, getProducts, UpdateProduct } from "../controller/ProductContr.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.post('/products', verifyUser, CreateProduct);
router.patch('/products/:id', verifyUser, UpdateProduct);
router.delete('/products/:id', verifyUser, DeleteProduct);
router.get('/products', verifyUser, getProducts);
router.get('/products/:id', verifyUser, getProductById);


export default router;