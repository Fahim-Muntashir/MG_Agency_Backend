import { Request, Response } from "express";
import { EmployeeServices } from "./employee.service";
import Joi from "joi";


const createEmployee = async (req: Request, res: Response) => {
    try {


        const nameSchema = Joi.object({
            firstName: Joi.string()
              .required()
              .trim()
              .max(20)
              .pattern(/^[A-Z][a-z]*$/, { name: 'capitalize' })
              .message('First name must start with an uppercase letter and only contain alphabetical characters'),
            lastName: Joi.string()
              .required()
              .pattern(/^[A-Za-z]+$/, { name: 'alphabetical' })
              .message('Last name must only contain alphabetical characters'),
          });
          
          const addressSchema = Joi.object({
            country: Joi.string().required(),
            city: Joi.string().required(),
          });
          
          const employeeSchema = Joi.object({
            id: Joi.string().required(),
            name: nameSchema.required(),
            age: Joi.string().required(),
            dateOfBirth: Joi.string().required(),
            email: Joi.string().email().required(),
            address: addressSchema.required(),
            phoneNumber: Joi.string().required(),
            position: Joi.string().required(),
            gender: Joi.string().valid('Male', 'Female', 'other').required(),
            bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'),
            isActive: Joi.string().default('active'),
            profile: Joi.string().required(),
            hobby: Joi.string(),
          });

        
          
          const {employee:employeeData} = req.body;
        const {error,value}= employeeSchema.validate(employeeData); 
        
        console.log(error,value);


        if (error) {
            res.status(500).json({
                success: false,
                message: "Something went Wrong",
                error:error.details,
        })
        }


        const result = await EmployeeServices.createEmployeeIntoDb(employeeData)
        res.status(200).json({
            success: true,
            message: "Employee is Created Successfully",
            data:result,
        })
        } catch (err) {
            res.status(500).json({
                success: false,
                message: "Something went Wrong",
                error:err,
        })}
    }


// GET all employee
const getAllEmployes = async (req: Request, res: Response) => {
    try {
    const result = await EmployeeServices.getAllEmployeeFromDB()
        res.status(200).json({
            success: true,
            message: "Employee is Retrived Successfully",
            data:result,
    })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went Wrong",
            error:err,
    })}
}

// get signle employee


const getSingleEmploye = async (req: Request, res: Response) => {
    try {

        const {employeeId} = req.params;

    const result = await EmployeeServices.getSingleEmployeeFromDB(employeeId)
        res.status(200).json({
            success: true,
            message: "Employee is Retrived Successfully",
            data:result,
    })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went Wrong",
            error:err,
    })}
}


export const EmployeeControllers = {
    createEmployee,
    getAllEmployes,
    getSingleEmploye
}