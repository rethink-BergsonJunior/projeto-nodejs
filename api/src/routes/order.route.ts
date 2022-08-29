<<<<<<< HEAD
import { Router,NextFunction,Request,Response } from 'express'
import orderController from '../controllers/order.controller'
import {query, validationResult} from 'express-validator'

const order = Router()
order.get('/order',
query() 
.custom((queryParameters) => {

const queries = Object.keys(queryParameters)
if(queries.includes('customer_id') ||queries.includes('shipper_id')) {
        return true

}

})
.withMessage('Valores obrigátorios não foram informados'),



 orderController.getOrderByCustomersOrshippers)
=======
import { Router } from 'express';
import orderController from '../controllers/order.controller';

const order = Router();
>>>>>>> 5e312a2c95ee1a91090b50a6a21465326eff6cba

order.get('/order', orderController.getOrderByCustomersOrshippers);

export default order;
