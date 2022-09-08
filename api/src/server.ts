import order from './routes/order.route';
import product from './routes/product.route';
import employee from './routes/employee.route';
import express, { NextFunction, Request, Response } from 'express';
import error from './error/handler';


const server = express();

server.use(express.json());

server.use(product);
server.use(order);
server.use(employee);


server.get('/teste', (request: Request, response: Response) => {
	console.log(request.query, 'request.query');

	response.json({ ok: true });
});

server.get(
	'/error',
	(request: Request, response: Response, next: NextFunction) => {
		try {
			throw new Error('teste error deu erro');
		} catch (error: any) {
			console.log(error);
			next({ message: 'Sei la, deu erro aki', code: error.code, error });
		}
	}
);

server.use(error.handler);

export default server;
