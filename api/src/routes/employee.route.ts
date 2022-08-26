import { Router, NextFunction, Request, Response } from 'express'
import employeeController from '../controllers/employee.controller'
import { body, validationResult } from 'express-validator'

const employee = Router()
employee.post(
  '/employee',
  body('period.start_date').isString().notEmpty(),
  body('period.end_date').isString().notEmpty(),
  body('period').notEmpty().isObject()
  .withMessage('Tipo invalido'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    next()
  },

  employeeController.employees
)

export default employee
