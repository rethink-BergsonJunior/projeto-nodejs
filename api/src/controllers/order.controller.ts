import { Request, Response } from 'express';
import orderServices from '../services/order.services';

class OrderController {
	async getOrderByCustomersOrshippers(req: Request, res: Response) {
		const { customer_id, shipper_id } = req.query;

		const data = await orderServices(customer_id, shipper_id);
		res.json({ data });
	}
}

export default new OrderController();
