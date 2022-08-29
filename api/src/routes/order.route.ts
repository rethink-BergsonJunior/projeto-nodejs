import { Router,NextFunction,Request,Response } from 'express'
import orderController from '../controllers/order.controller'
import {query, validationResult} from 'express-validator'

const order = Router()
order.get(
	'/order',
	query()
		.custom(queryParameters => {
			const queries = Object.keys(queryParameters);
			if (
				queries.includes('customer_id') ||
				queries.includes('shipper_id')
			) {
				return true;
			}
		})
		.withMessage('Valores obrigátorios não foram informados'),
	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			const [error] = errors.array();
			return next({
				message: 'Erro de validação dos dados',
				code: 55,
				statusCode: 400,
				error
			});
		}

		next();
	},

	orderController.getOrderByCustomersOrshippers
);


export default order;
