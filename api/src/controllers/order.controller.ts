import { ordersMocks } from '../../database/mocks'
import OrderInterface from '../interfaces/order.interface'
import { Request, Response } from 'express'



class OrderController {
  constructor() {}

  async getOrderByCustomersOrshippers(req: Request, res: Response) {
    const { customerId, shipVia } = req.query

    console.info({ customerId,shipVia }, '{customerId, shipVia }')

    if (customerId) {
      const orders = ordersMocks.filter(
        (order:OrderInterface) =>order.customerId === customerId
      )

      res.json({ orders })

    } else if(shipVia){
      const orders = ordersMocks.filter(
        (order:OrderInterface) =>order.shipVia === Number(shipVia)
      )

      res.json({ orders })

    }
  }
}

export default new  OrderController ()
