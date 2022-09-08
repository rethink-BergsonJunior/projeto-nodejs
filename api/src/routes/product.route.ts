import { NextFunction, Router, Request, Response } from 'express';
import productController from '../controllers/product.controller';
import { query, validationResult } from 'express-validator';
const fs = require('fs');

const product = Router();

product.get(
	'/product',
	query()
		.custom(queryParameters => {
			const queries = Object.keys(queryParameters);
			if (
				queries.includes('supplier_ids') ||
				queries.includes('category')
			) {
				return true;
			}
		})
		.withMessage('Valores obrigatórios não informados'),

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

		next();
	},

	productController.getProductsBySupplierOrCategory,

	(req: Request, res: Response) => {
		//mapear as informações
		const timestamp = Date.now();
		const data = JSON.stringify({
			method: req.method,
			route: req.url,
			status: res.statusCode,
			time: `${timestamp - res.locals.start_time}ms`,
			request: req.body,
			response: { data_product: res.locals.data_product },
			timestamp
		});

		//criar um arquivo com as informações
		fs.writeFile(
			'../api/src/logs/product.log/logProduct' + Date.now() + '.txt',
			data,
			function (err: any) {
				if (err) throw err;
				console.log('Saved!');
			}
		);
		res.json({ data_product: res.locals.data_product });
	}
);

export default product;
