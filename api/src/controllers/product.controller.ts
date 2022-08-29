import { NextFunction, Request, Response } from 'express';
import knex from '../database/connection';
import productServices from '../services/product.services';

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

			res.json({ data_product });
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
