import { NextFunction, Router, Request, Response} from 'express';
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

		next();
	},

	productController.getProductsBySupplierOrCategory,

	(req: Request, res: Response) => {
		//mapear as informações
		const data = JSON.stringify({
			method: req.method,
			route: req.url,
			status: res.statusCode,
			time: Date.now(),
			request: req.query,
			timestamp: Date(),
			response: ''
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
	}
);




export default product;

