import { Request, Response } from "express";
import { EmployeeServices } from "./employee.service";

const createEmployee = async (req: Request, res: Response) => {
    try {
        const {employee:employeeData} = req.body;
    const result = await EmployeeServices.createEmployeeIntoDb(employeeData)
        res.status(200).json({
            success: true,
            message: "Employee is Created Successfully",
            data:result,
    })
    } catch (err) {
        console.log(err);
}
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
        console.log(err);
}
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
        console.log(err);
}
}


export const EmployeeControllers = {
    createEmployee,
    getAllEmployes,
    getSingleEmploye
}