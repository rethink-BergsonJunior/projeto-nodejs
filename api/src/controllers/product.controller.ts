import { NextFunction, Request, Response } from 'express';
import productServices from '../services/product.services';
const fs = require('fs');

class ProductController {
	constructor() {}

	async getProductsBySupplierOrCategory(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			// throw new Error('Erro no conntroller de produtos');

			const { category, supplier_ids } = req.query;

			const data_product = await productServices(category, supplier_ids);

			res.locals.data_product = data_product;

			//chama middleware do log
			next();
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

export default new ProductController();
