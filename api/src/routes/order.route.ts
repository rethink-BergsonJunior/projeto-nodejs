import { Router, NextFunction, Request, Response } from 'express';
import orderController from '../controllers/order.controller';
import { query, validationResult } from 'express-validator';
const fs = require('fs');

const order = Router();
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
	res.locals.start_time = Date.now();
//chama o controller
		next();
	},

	orderController.getOrderByCustomersOrshippers,

	(req: Request, res: Response) => {
		//mapear as informações
const timestamp = Date.now();
		const data = JSON.stringify({
			method: req.method,
			route: req.url,
			status: res.statusCode,
			time: `${timestamp - res.locals.start_time}ms`,
			request: req.body,
			response: { data: res.locals.data},
			timestamp
		});

		//criar um arquivo com as informações
		fs.writeFile(
			'../api/src/logs/order.log/logOrder' + Date.now() + '.txt',
			data,
			function (err: any) {
				if (err) throw err;
				console.log('Saved!');
			}
		);
res.json({ data_period: res.locals.data });
	}
);

export default order;
