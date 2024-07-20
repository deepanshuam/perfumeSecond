import { Router } from "express";
import {
  getProducts,
  getProductById,

} from "../controller/products.controller.js";

const router = Router();

router.get("/", getProducts);
router.get("/:productId", getProductById);


export default router;
