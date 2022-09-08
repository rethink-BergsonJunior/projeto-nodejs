import knex from '../database/connection';

const productServices = async (category: any, supplier_ids: any) => {
	// throw new Error('erro no product services');
	if (supplier_ids) {
		const products = await knex
			.select('')
			.from('products')
			.where('supplier_ids', supplier_ids);
		return products;
	} else if (category) {
		const products = await knex
			.select('')
			.from('products')
			.whereLike('category', category);
		return products;
	}
};
export default productServices;
