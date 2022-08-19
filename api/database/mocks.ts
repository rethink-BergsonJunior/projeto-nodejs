import Employees from '../src/interfaces/employees.interface'
import Order from '../src/interfaces/order.interface'
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

const ordersMocks: Array<Order> = [
  {
    orderId: 1,
    customerId: 'Client1',
    employeeId: 1,
    orderDate: '19/08/2022',
    requiredDate: '25/08/2022',
    shipDate: '28/08/2022',
    shipVia: 2,
    freigth: 32.8,
    shipName: ' ',
    shipAdress: ' ',
    shipCity: ' ',
    shipRegion: ' ',
  },
  {
    orderId: 2,
    customerId: 'Client4',
    employeeId: 1,
    orderDate: '19/08/2022',
    requiredDate: '25/08/2022',
    shipDate: '28/08/2022',
    shipVia: 2,
    freigth: 32.8,
    shipName: ' ',
    shipAdress: ' ',
    shipCity: ' ',
    shipRegion: ' ',
  },
]
const employeesMocks: Array<Employees> = [
  {
    employeeId: 3,
    lastName: 'Costa',
    firstName: 'Ana',
    title: ' ',
    titleOfCourtesy: ' ',
    birthDate: '29/07/2001',
    hireDay: '05/05/2021',
    adress: ' ',
    city: 'BH',
    region: 'Norte',
    postalCode: ' ',
    country: 'Brasil',
  },
]
export { productMocks, ordersMocks, employeesMocks }
