import { Router } from 'express'
import productController from '../controllers/product.controller'

const product = Router()

product.get('/product', productController.getProductsBySupplierOrCategory)

export { product }
