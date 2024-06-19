import { Router } from "express";
import { authPrivate } from "../middlewares/Auth.js";

const router = Router();

router.post('/ads/add', authPrivate, create);
router.get('/ads/list', getList);
router.get('/ad/:id',getItem);
//Enviando imagens, será Post
router.post('/ad/:id', update);

//Categories
router.get('/categories', GetCategories);

export default router;