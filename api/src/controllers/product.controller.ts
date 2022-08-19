import { productMocks } from '../../database/mocks'
import productInterface from '../interfaces/product.interface'
import { Request, Response } from 'express'

class ProductController {
  constructor() {}

  async getProductsBySupplierOrCategory(req: Request, res: Response) {
    const { categoryId, supplierId } = req.query

    console.info({ categoryId, supplierId }, '{ categoryId, supplierId }')

    if (supplierId) {
      const products = productMocks.filter(
        (product: productInterface) => product.supplierId === Number(supplierId)
      )
    
      res.json({ products })
    } else if(categoryId){
        const products = productMocks.filter(
        (product: productInterface) => product.categoryId=== Number(categoryId)
      )
    
      res.json({ products })
   }
  }
}

export default new ProductController()
