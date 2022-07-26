import express from "express";
import { CreateProduct, DeleteProduct, getProductById, getProducts, UpdateProduct } from "../controller/ProductContr.js";

const router = express.Router();

router.post('/products', CreateProduct);
router.patch('/products/:id', UpdateProduct);
router.delete('/products/:id', DeleteProduct);
router.get('/products', getProducts);
router.get('/products/:id', getProductById);


export default router;