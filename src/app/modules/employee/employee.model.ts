import { Schema, model } from "mongoose";
import { Address, Employee,  Name } from "./employee.interface";
import validator from "validator";



const nameSchema = new Schema<Name>(
    {
        firstName: {
                type: String,
            required: [true, "First name is must me included!"],
            trim:true,
                maxlength:[20,'First Name lenth can not be more than 20 carector'],
            validate: {
               validator: function (value:string) {
                    const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
                    return firstNameStr === value;
                },
                message:'{VALUE} is not in capitalize format'
            }
        
            },
            lastName: {
                type: String,
                required: true,
                validate: {
                    validator: (value: string) => 
                        validator.isAlpha(value),
                        message: '{VALUE} is not value' 
                }
            }
        }
    )

const addressSchema = new Schema<Address>({
    country: {
        type: String,
        required: [true, "Country is required!"],
    },
    city: {
        type: String,
        required: [true, "City is required!"],
    },
});


const employeeSchema = new Schema<Employee>({
    id: {
        type: String,
        required: [true, "Employee ID is required!"],
        unique:true,
    },
    name: {
        type:nameSchema,
        required: [true, "Name is required!"],
    },
    age: {
        type: String,
        required: [true, "Age is required!"],
    },
    dateOfBirth: {
        type: String,
        required: [true, "Gender is required!"],
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        validate: {
            validator: (value: string) => validator.isEmail(value),
            message:'{VALUE} is not a valid type'
        }
    },
    address: {
        type: addressSchema,
        required: [true, "Address is required!"],
    },
    phoneNumber: {
        type: String,
        required:true,
    }
    ,
    position: {
        type: String,
        required: [true, "Position is required!"],
    },
    gender: {
        type: String,
        enum: {
            values: ["Male", "Female", "other"],
            message:"The gender should be can only be one of the following : 'male', 'female','other' "
        
        },
        required: [true, "Gender is required!"],
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
        required: [true, "Gender is required!"],
    },
    hobby: {
        type: String,
    }

})

export const EmployeeModel = model<Employee>('Employee', employeeSchema);

