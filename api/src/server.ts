import {product} from './routes/product.route'
import {order} from './routes/product.route'
import {employee} from './routes/product.route'
import express, { Request, Response } from 'express'

const server = express()

server.use(express.json())

server.use(product)
server.use(order)
server.use(employee)
server.get('/teste', (request: Request, response: Response) => {
  console.log(request.query, 'request.query')

  response.json({ ok: true })
})

export default server
