import { NextFunction, Request, Response } from 'express';
import orderServices from '../services/order.services';
class OrderController {
	async getOrderByCustomersOrshippers(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			// Erro forçado: throw new Error('Erro no conntroller de pedidos');
			const { customer_id, shipper_id } = req.query;

			const data = await orderServices(customer_id, shipper_id);
			res.json({ data });
		} catch (err: any) {
			const error = {
				message: err.message,
				code: 10,
				statusCode: 406,
				error: {}
			};
			next(error);
		}
	}
}

export default new OrderController();
