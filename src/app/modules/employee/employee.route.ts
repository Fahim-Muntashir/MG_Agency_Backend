import  express  from "express";
import { EmployeeControllers } from "./employee.controller";

const router = express.Router();

// will call controller function
router.post('/create-employee', EmployeeControllers.createEmployee)
router.get('/get-employee', EmployeeControllers.getAllEmployes)
router.get('/:employeeId', EmployeeControllers.getSingleEmploye)

export const EmployeeRoutes = router;