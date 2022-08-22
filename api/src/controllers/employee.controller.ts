
import { Request, Response } from 'express'
import { employeesMocks, ordersMocks } from '../../database/mocks'
import OrderInterface from '../interfaces/order.interface'
import EmployeesInterface from '../interfaces/employees.interface'
import Employees from '../interfaces/employees.interface'



class employeeController {
  constructor() {}
   async getOrderByPeriod(req: Request, res: Response) {
  
    const { employeeId, orderDate } = req.query

    console.info({ employeeId, orderDate }, '{ employeeId, orderDate}')

    if (orderDate) {
      const orders = ordersMocks.filter(
        (order:OrderInterface) =>order.employeeId === Number(employeeId)  
      )
      const employees = employeesMocks.filter((employee: EmployeesInterface) => employee.employeeId === Number(employeeId))
        let  QtdPedido =0;
      if(Number(orders) === Number(employees)){}
           
           QtdPedido +=1;

          res.json({ QtdPedido })

    }
      
    }
   }

export default new  employeeController ()