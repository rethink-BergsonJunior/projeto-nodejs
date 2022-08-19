import Product from '../src/interfaces/product.interface'

const productMocks: Array<Product> = [
  {
    productId: 1,
    productName: 'Produto 1',
    supplierId: 1,
    categoryId: 1,
    quantityPerUnit: '5',
    unitPrice: 25.5,
    unitsInStock: 100,
    unitsOnOrder: 5,
    reorderLevel: 1,
    descontinued: 0, // falses
  },
  {
    productId: 2,
    productName: 'Produto 2',
    supplierId: 2,
    categoryId: 1,
    quantityPerUnit: '5',
    unitPrice: 29.99,
    unitsInStock: 100,
    unitsOnOrder: 6,
    reorderLevel: 2,
    descontinued: 0, // false
  },
]

const ordersMocks: any = []

export { productMocks, ordersMocks }
