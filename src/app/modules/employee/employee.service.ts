import { Employee } from "./employee.interface";
import { EmployeeModel } from "./employee.model";

const createEmployeeIntoDb = async (employee:Employee) => {
    const result = await EmployeeModel.create(employee);
    return result;
}


const getAllEmployeeFromDB = async () => {
    const result = await EmployeeModel.find();
    return result;
}

const getSingleEmployee = async (id: string) => {
    const result = await EmployeeModel.findOne({ id })
    return result;
}


export const EmployeeServices = {
    createEmployeeIntoDb,
    getAllEmployeeFromDB,
    getSingleEmployee
}