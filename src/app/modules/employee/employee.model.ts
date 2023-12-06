import { Schema, model } from "mongoose";
import { Address, Employee,  Name } from "./employee.interface";

const nameSchema = new Schema<Name>(
    {
        firstName: {
                type: String,
                required: [true,"First name is must me included!"],
            },
            lastName: {
                type: String,
                required: true,
            }
        }
    )

const addressSchema = new Schema<Address>({
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
});


const employeeSchema = new Schema<Employee>({
    id: {
        type: String,
        requred:true,
        unique:true,
    },
    name: {
        type:nameSchema,
        required:true,
    },
    age: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: addressSchema,
        required:true,
    },
    phoneNumber: {
        type: String,
        required:true,
    }
    ,
    position: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: {
            values: ["Male", "Female", "other"],
            message:"The gender should be can only be one of the following : 'male', 'female','other' "
        
        },
        required:true,
    },
    bloodGroup: {
        type: String,
        enum: [
            'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
          ],
    },
    isActive: {
        type: String,
        default:'active',
    },
    profile: {
        type: String,
        required:true,
    },
    hobby: {
        type: String,
    }

})

export const EmployeeModel = model<Employee>('Employee', employeeSchema);

