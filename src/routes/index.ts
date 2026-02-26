import { Router } from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { TutorRoutes } from "../modules/Tutor/tutor.route";
import { CategoriesRoutes } from "../modules/Categories/categories.route";
import { BookingsRoutes } from "../modules/Bookings/bookings.route";
import { ReviewsRoutes } from "../modules/Reviews/reviews.route";
import { StudentRoutes } from "../modules/Student/student.route";
import { AdminRoutes } from "../modules/Admin/admin.route";

const router = Router();

const routerManager = [
    {
        path: "/auth",
        route: AuthRoutes
    },
    {
        path: "/tutors",
        route: TutorRoutes
    },
    {
        path: "/categories",
        route: CategoriesRoutes
    },
    {
        path: "/bookings",
        route: BookingsRoutes
    },
    {
        path: "/reviews",
        route: ReviewsRoutes
    },
    {
        path: "/students",
        route: StudentRoutes
    },
    {
        path: "/admin",
        route: AdminRoutes
    }
]

routerManager.forEach((r) => router.use(r.path, r.route));

export default router;