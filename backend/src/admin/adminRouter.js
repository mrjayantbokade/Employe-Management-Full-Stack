import { Router } from "express";
import { getEmployees, registerAdmin } from "./adminController.js";
import  {upload}  from "../middlewares/multer.js";


const adminRouter = Router()



adminRouter.get("/get-employees", getEmployees )

adminRouter.post("/register-admin",
     upload.single('profileImage'),
     registerAdmin )


export default adminRouter