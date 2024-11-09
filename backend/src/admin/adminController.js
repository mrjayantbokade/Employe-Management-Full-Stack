import { uploadOnCloudinary } from "../cloudinary/cloudinary.js"
import { ApiError } from "../middlewares/apiError.js"
import { asyncHandler } from "../middlewares/asyncHandler.js"
import { Admin } from "./admin.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { configDotenv } from "dotenv"

const getEmployees = async (req, res) => {

    res.status(200)
        .json(
            {
                message: 'Hello World!'
            }
        )



}


const registerAdmin = asyncHandler(async (req, res) => {

    const { email, password, role, phone, designation, gender } = req.body

    if ([email, password, role, phone, gender].some((field) => {

        return field?.trim() === ""
    })) {

        throw new ApiError(400, "Please fill all the fields(username, email, password, role, phone, gender)")
    }

    const admin = await Admin.findOne({ email })



    if (admin) {
        throw new ApiError(400, "admin or email already exists")
    }

    const profileImageLocalPath = req.file.path

    if (!profileImageLocalPath) {
        throw new ApiError(400, "Profile image is required")
    }


    const profileImage = await uploadOnCloudinary(profileImageLocalPath)

    if (!profileImage) {
        throw new ApiError(400, "image is not found in local storage")
    }
    console.log(profileImage)

    const hashedPassword = await bcrypt.hash(password, 10)

    console.log(hashedPassword, "this is hashed password")

    const adminData = await Admin.create({
        email,
        password: hashedPassword,
        role,
        phone,
        designation,
        gender,
        profileImage: profileImage.url
    })

    console.log(adminData)




    res.status(201)
        .json(
            {
                status: "success",
                message: "Admin registered successfully",
                data: "adminData"
            }
        )
}
)

const loginAdmin = asyncHandler(async (req, res) => {


    const { email, password } = req.body

    const admin = await Admin.findOne({ email })


    if (!admin) {
        throw new ApiError(404, "admin not found")
    }

    const legit = bcrypt.compare(password, admin.password)


    if (!legit) {
        throw new ApiError(400, "incorrect password while login")
    }


    const accessToken = generateAccessToken(admin._id)


    const data = {
        email: admin.email,
        accessToken: accessToken
        
    }



    res.status(200)
        .json({
            "status": 200,
            "message": "login successfull",
            data
        })
})


const generateAccessToken = (_id) => {

    const accessToken = jwt.sign(
        {
            _id
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );

    return accessToken


}



export { getEmployees, registerAdmin, loginAdmin }

