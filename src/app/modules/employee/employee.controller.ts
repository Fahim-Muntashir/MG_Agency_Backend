import { Request, Response } from "express";
import { EmployeeServices } from "./employee.service";

const createEmployee = async (req: Request, res: Response) => {
    try {
        const employee = req.body;
    const result = await EmployeeServices.createEmployeeIntoDb(employee)
        res.status(200).json({
            success: true,
            message: "Employee is Created Successfully",
            data:result,
    })
    } catch (err) {
        console.log(err);
}
}

export const EmployeeControllers = {
    createEmployee
}