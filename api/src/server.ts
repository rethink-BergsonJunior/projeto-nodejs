<<<<<<< HEAD
import { product } from './routes/product.route'
import order from './routes/order.route'
import employee from './routes/employee.route'
import express, { Request, Response } from 'express'
=======
import product from './routes/product.route';
import order from './routes/order.route';
import employee from './routes/employee.route';
import express, { Request, Response } from 'express';
>>>>>>> 5e312a2c95ee1a91090b50a6a21465326eff6cba

const server = express();

server.use(express.json());

server.use(product);
server.use(order);
server.use(employee);

server.get('/teste', (request: Request, response: Response) => {
	console.log(request.query, 'request.query');

	response.json({ ok: true });
});

export default server;
