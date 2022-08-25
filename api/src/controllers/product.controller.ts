import { Request, Response } from 'express';
import knex from '../database/connection';
import productServices from '../services/product.services';

class ProductController {
	constructor() {}

	async getProductsBySupplierOrCategory(req: Request, res: Response) {
		const { category, supplier_ids } = req.query;

		const data_product = await productServices(category, supplier_ids);

		res.json({ data_product });
	}
}

export default new ProductController();
