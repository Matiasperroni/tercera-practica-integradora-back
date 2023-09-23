import { Router } from "express";

import {getProducts, getProductById, addProduct, updateProduct, deleteProduct, mockingProducts} from "../controllers/products.controller.js"
import { isAdmin, isUser } from '../middlewares/middlewares.js';
const router = Router();


router.get("/mockingproducts", isUser, mockingProducts)

router.get("/", isUser, getProducts);

router.get("/:pid", isUser, getProductById);

router.post("/", isAdmin, addProduct);

router.put("/:pid", isAdmin, updateProduct);

router.delete("/:pid", isAdmin, deleteProduct);

export default router;
