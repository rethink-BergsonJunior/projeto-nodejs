import { Router } from 'express'
import orderController from '../controllers/order.controller'

const order = Router()
order.get('/order', orderController.getOrderByCustomersOrshippers)

export default order