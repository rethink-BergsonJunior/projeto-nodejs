<<<<<<< HEAD
import { Request, Response } from 'express'
import orderServices from '../services/order.services'

class OrderController {
  async getOrderByCustomersOrshippers(req: Request, res: Response) {
    const { customer_id, shipper_id } = req.query

    const data = await orderServices(customer_id, shipper_id)
    res.json({ data })
  }
=======
import { Request, Response } from 'express';
import orderServices from '../services/order.services';

class OrderController {
	async getOrderByCustomersOrshippers(req: Request, res: Response) {
		const { customer_id, shipper_id } = req.query;

		const data = await orderServices(customer_id, shipper_id);
		res.json({ data });
	}
>>>>>>> 5e312a2c95ee1a91090b50a6a21465326eff6cba
}

export default new OrderController();
