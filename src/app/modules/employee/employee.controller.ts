import { Request, Response } from "express";
import { EmployeeServices } from "./employee.service";
import { employeeValidationSchema } from "./employee.validation";
import { Employee } from "./employee.interface";

const createEmployee = async (req: Request, res: Response) => {
    try {
        // Creating a schema validation using Zod
        const { employee: employeeData } = req.body;
        const zodparsedData = employeeValidationSchema.parse(employeeData);

        // Asserting the type to Employee
        const employeeEntry = zodparsedData as Employee;

        const result = await EmployeeServices.createEmployeeIntoDb(employeeEntry);

        res.status(200).json({
            success: true,
            message: "Employee is Created Successfully",
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went Wrong",
            error: err,
        });
    }
};


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