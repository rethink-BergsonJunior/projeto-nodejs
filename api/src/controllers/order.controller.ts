
import { Request, Response } from 'express'
import knex from '../database/connection'

class OrderController {
  constructor() {}

  async getOrderByCustomersOrshippers(req: Request, res: Response) {
    const { customer_id, shipper_id } = req.query

    console.info({ customer_id, shipper_id }, '{customer_id, shipper_id }')

    if (customer_id) {
     const orders = await knex
        .select('*')
        .from('orders')
        .where('customer_id', customer_id)

      res.json({ orders })
    } else if (shipper_id) {
      const orders = await knex
        .select('*')
        .from('orders')
        .where('shipper_id', shipper_id)
      res.json({ orders })
    } 
  }
}

export default new OrderController()
