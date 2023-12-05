import { Schema, model } from "mongoose";
import { Address, Employee, Employee, Name } from "./employee.interface";

const NameSchema = new Schema<Name>(
    {
        firstName: {
            type: String,
            required:true,
        },
        lastName: {
            type: String,
            required:true,
        }
    }
)

const AddressSchema = new Schema<Address>({
    country: {
        type: String,
        required:true,
    },
    city: {
        type: String,
        requierd:true,
    },
})

const employeeSchema = new Schema<Employee>({
    name:NameSchema,
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
    address: AddressSchema,
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
        requried:true,
    },
    hobby: {
        type: String,
    }

})

const Employee = model<Employee>('Employee', employeeSchema);