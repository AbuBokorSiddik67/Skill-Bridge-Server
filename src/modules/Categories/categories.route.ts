import express from 'express';
import { CategoriesController } from './categories.controller';
import auth, { UserRole } from '../../middlewares/auth';

const router = express.Router();

router.post("/create", auth(UserRole.admin), CategoriesController.createCategory);
router.get("/", CategoriesController.getCategory);
router.get("/:id", CategoriesController.getSingleCategory);
router.put("/update/:id", auth(UserRole.admin), CategoriesController.updateCategory);
router.delete("/delete/:id", auth(UserRole.admin), CategoriesController.deleteCategory);


export const CategoriesRoutes = router;
