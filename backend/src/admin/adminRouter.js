import { Router } from "express";
import { getEmployees, loginAdmin, registerAdmin, createEmployee, logoutAdmin } from "./adminController.js";
import { upload } from "../middlewares/multer.js";
import verifyJWT from "../middlewares/authMiddleware.js";



const adminRouter = Router()



adminRouter.get("/get-employees",verifyJWT, getEmployees)

adminRouter.post("/register-admin",
     upload.single('profileImage'),
     registerAdmin)

adminRouter.post("/login-admin", loginAdmin)

adminRouter.post("/create-employee",
     verifyJWT,
     upload.single('profileImage'),
     createEmployee)


adminRouter.post("/logout-admin", logoutAdmin)

export default adminRouter