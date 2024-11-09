
import mongoose, { Schema } from "mongoose"

const employeeSchema  = new Schema(
{
   
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true

    },
    phone:{
        type: Number,
        required: true
    },
    profileImage: {
        type: String,
        required: false
    }

}, {timestamps: true})


export const Employee = mongoose.model('Employee', employeeSchema)