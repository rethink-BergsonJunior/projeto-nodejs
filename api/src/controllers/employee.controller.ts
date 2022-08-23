import { Request, Response } from 'express'
import knex from '../database/connection'
import { employee } from '../routes/product.route'

class employeeController {
  constructor() {}
  async getOrderByPeriod(req: Request, res: Response) {
    const {order_date} = req.query

    console.info({order_date }, '{order_date}')

    if (order_date) {

        const orders = await knex
        .select('employee_id', 'order_date')
        .from('orders')
        .where('order_date', order_date)
        .groupBy('employee_id').distinct()
        .count('employee_id')



      res.json({orders})


    }
  }
}

export default new employeeController()
