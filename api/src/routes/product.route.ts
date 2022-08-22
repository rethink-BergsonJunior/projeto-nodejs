import { Router } from 'express'
import productController from '../controllers/product.controller'
import orderController from '../controllers/order.controller'
import employeeController from '../controllers/employee.controller'

const product = Router()
const order = Router()
const employee = Router()

product.get('/product', productController.getProductsBySupplierOrCategory)
order.get('/order', orderController.getOrderByCustomersOrshippers)
employee.get('/employee', employeeController.getOrderByPeriod)


export{ product, order, employee }

