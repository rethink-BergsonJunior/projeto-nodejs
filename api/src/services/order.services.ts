import knex from '../database/connection';

const orderServices = async (customer_id: any, shipper_id: any) => {
	if (customer_id) {
		const orders = await knex
			.select('')
			.from('orders')
			.where('customer_id', customer_id);
		return orders;
	} else if (shipper_id) {
		const orders = await knex
			.select('')
			.from('orders')
			.where('shipper_id', shipper_id);
		return orders;
	}
};
export default orderServices;
