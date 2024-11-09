import express, { application } from 'express'
import connectDB from './db/dbConnect.js'
import adminRouter from './admin/adminRouter.js'
import cookieParser from 'cookie-parser'


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public")) 
app.use(cookieParser())


app.use("/api/v1", adminRouter)




export default app