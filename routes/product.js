import { Router } from "express";
import { create, list, read, remove, search, update } from "../controllers/product";

const router = Router();

router.get('/products', list);
router.get('/product/:id', read);
router.post('/product', create);
router.delete('/product/:id', remove);
router.put("/product/:id", update)
router.post("/search", search)     

export default router;