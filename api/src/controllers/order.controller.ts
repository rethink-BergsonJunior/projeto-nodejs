import { NextFunction, Request, Response } from 'express';
import orderServices from '../services/order.services';
class OrderController {
	async getOrderByCustomersOrshippers(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			// Erro forçado: throw new Error('Erro no controller de pedidos');
			const { customer_id, shipper_id } = req.query;

			const data = await orderServices(customer_id, shipper_id);
			res.locals.data = data;

			//chama middleware do log
			next();
		} catch (err: any) {
			//registra o error e exibe para o usuario
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
