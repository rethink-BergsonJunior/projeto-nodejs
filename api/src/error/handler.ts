import { NextFunction, Request, Response } from 'express';

interface Error {
	message: string;
	code: number;
	statusCode: number;
	error: any;
}

class Error {
	constructor() {}

	handler(error: Error, req: Request, res: Response, next: NextFunction) {
		console.log(error, 'error middleware');
		const { message, statusCode, ...errorData } = error;

		res.status(statusCode || 500).json({
			message: error.message,
			...errorData
		});
	}
}

export default new Error();
