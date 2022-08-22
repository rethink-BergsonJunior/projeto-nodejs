import { Request, Response } from 'express'
import EmployeeInterface from '../interfaces/employees.interface'
import { ordersMocks } from '../../database/mocks'
import { employeesMocks } from '../../database/mocks'

class employeeController {
  constructor() {}
  async getOrderByPeriod(req: Request, res: Response) {
    const { employeeId, orderDate } = req.query

    console.info({ employeeId, orderDate }, '{ employeeId, orderDate}')
    //if( ordersMocks.employeeId === employeesMocks.employeeId)
  }
}
export default new employeeController()
