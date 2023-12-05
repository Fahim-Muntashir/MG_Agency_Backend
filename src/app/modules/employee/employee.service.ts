import { Employee } from "./employee.interface";
import { EmployeeModel } from "./employee.model";

const createEmployeeIntoDb = async (employee:Employee) => {
    const result = await EmployeeModel.create(employee);
    return result;
}

export const EmployeeServices = {
    createEmployeeIntoDb,
}