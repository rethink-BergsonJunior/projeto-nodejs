import { Router, NextFunction, Request, Response } from 'express';
import employeeController from '../controllers/employee.controller';
import { body, validationResult } from 'express-validator';
const fs = require('fs');

const employee = Router();
employee.post(
	'/employee',
	body('period.start_date').isString().notEmpty(),
	body('period.end_date').isString().notEmpty(),
	body('period').notEmpty().isObject().withMessage('Tipo invalido'),
	async (req: Request, res: Response, next: NextFunction) => {
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

	employeeController.employees,

	(req: Request, res: Response) => {
		//mapear as informações
		const timestamp = Date.now();
		const data = JSON.stringify({
			method: req.method,
			route: req.url,
			status: res.statusCode,
			time: `${timestamp - res.locals.start_time}ms`,
			request: req.body,
			response: { data_period: res.locals.data_period },
			timestamp
		});

		//criar um arquivo com as informações
		fs.writeFile(
			'../api/src/logs/employee.log/logEmployee' + timestamp + '.txt',
			data,
			function (err: any) {
				if (err) throw err;
				console.log('Saved!');
			}
		);

		res.json({ data_period: res.locals.data_period });
	}
);

export default employee;
