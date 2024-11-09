import { Router } from "express";
import { getEmployees, loginAdmin, registerAdmin } from "./adminController.js";
import  {upload}  from "../middlewares/multer.js";


const adminRouter = Router()



adminRouter.get("/get-employees", getEmployees )

adminRouter.post("/register-admin",
     upload.single('profileImage'),
     registerAdmin )

adminRouter.post("/login-admin", loginAdmin)

export default adminRouter