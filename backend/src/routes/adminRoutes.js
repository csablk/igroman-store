import { Router } from "express";
import { checkAdminRole } from "../middlewares/check-admin.middleware.js";
import { getAccounts } from "../controllers/admin/get-accounts.controller.js";

const adminRouter = Router();

adminRouter.get("/users/:page/:limit", checkAdminRole, getAccounts);
adminRouter.delete("/:id", checkAdminRole);

export default adminRouter;
