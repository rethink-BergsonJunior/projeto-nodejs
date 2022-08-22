import { Request, Response } from 'express'
import knex from '../database/connection'

class ProductController {
  constructor() {}

  async getProductsBySupplierOrCategory(req: Request, res: Response) {
    const { category, supplierId } = req.query

    console.info({ category, supplierId }, '{ category, supplierId }')

    if (supplierId) {
      const products = await knex
        .select('*')
        .from('products')
        .where('supplier_ids', supplierId)

      res.json({ products })
    } else if (category) {
      const products = await knex
        .select('*')
        .from('products')
        .whereLike('category', `%${category}%`)

      res.json({ products })
    }
  }
}

export default new ProductController()
