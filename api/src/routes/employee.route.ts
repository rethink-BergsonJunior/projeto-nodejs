import { Router, NextFunction, Request, Response } from 'express';
import employeeController from '../controllers/employee.controller';
import { body, validationResult } from 'express-validator';

const employee = Router();
employee.post(
	'/employee',
	body('period.start_date').isString().notEmpty(),
	body('period.end_date').isString().notEmpty(),
	body('period').notEmpty().isObject().withMessage('Tipo invalido'),
	(req: Request, res: Response, next: NextFunction) => {
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

	employeeController.employees
);

export default employee;
