import  express  from "express";
import { EmployeeControllers } from "./employee.controller";

const router = express.Router();

// will call controller function
router.post('/create-employee',EmployeeControllers.createEmployee)