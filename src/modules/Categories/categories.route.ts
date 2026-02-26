import express from 'express';
import { CategoriesController } from './categories.controller';

const router = express.Router();

router.post("/create", CategoriesController.createCategory);
router.get("/", CategoriesController.getCategory);
router.put("/update/:id", CategoriesController.updateCategory);
router.delete("/delete/:id", CategoriesController.deleteCategory);


export const CategoriesRoutes = router;
