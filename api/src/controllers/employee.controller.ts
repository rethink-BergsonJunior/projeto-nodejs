import { Request, Response } from 'express'
import knex from '../database/connection'

class employeeController {
  constructor() {}


 
  async employees(req: Request, res: Response) {
    
    const { period } = req.body
  
    
    console.info({ period }, 'period')
    
    const break_date = await knex
   .select('employee_id')
   .from('orders')
   .andWhereBetween('order_date',[period.start_date,period.end_date])
   .groupBy('employee_id')
   .count('id')

    res.json({ break_date })
  }
}

export default new employeeController()
