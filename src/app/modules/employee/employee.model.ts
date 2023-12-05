import { Schema, model } from "mongoose";
import { Address, Employee,  Name } from "./employee.interface";

const nameSchema = new Schema<Name>(
    {
        firstName: {
                type: String,
                required: true,
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
    id:{type:String},
    name:nameSchema,
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
    address: addressSchema,
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
        enum: ["Male", "Female"],
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

