import { NextFunction, Request, Response } from 'express';
import employeeServices from '../services/employee.services';

class employeeController {
	constructor() {}

	async employees(req: Request, res: Response, next: NextFunction) {
		try {
			// Erro forçado: throw new Error('Erro no conntroller de empregados');
			const { period } = req.body;

			const data_period = await employeeServices(period);

			res.json({ data_period });
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
export default new employeeController();
