import { NextFunction, Router, Request, Response } from 'express'
import productController from '../controllers/product.controller'
import { query, validationResult } from 'express-validator'

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
			return res.status(400).json({ errors: errors.array() });
		}

		next();
	},
	productController.getProductsBySupplierOrCategory
);

export default product;
