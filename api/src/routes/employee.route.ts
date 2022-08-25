import { Router } from 'express';
import employeeController from '../controllers/employee.controller';

const employee = Router();

employee.post('/employee', employeeController.employees);

export default employee;
