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

		next();
	},

	employeeController.employees,

	(req: Request, res: Response) => {
		//mapear as informações
		const data = JSON.stringify({
			method: req.method,
			route: req.url,
			status: res.statusCode,
			time: Date.now(),
			request: req.body,
			timestamp: Date(),
			response: ''
		});

		//criar um arquivo com as informações
		fs.writeFile(
			'../api/src/logs/employee.log/logEmployee' + Date.now() + '.txt',
			data,
			function (err: any) {
				if (err) throw err;
				console.log('Saved!');
			}
		);
	}
);

export default employee;
