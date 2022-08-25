import { Request, Response } from 'express';
import employeeServices from '../services/employee.services';

class employeeController {
	constructor() {}

	async employees(req: Request, res: Response) {
		const { period } = req.body;

		const data_period = await employeeServices(period);

		res.json({ data_period });
	}
}

export default new employeeController();
