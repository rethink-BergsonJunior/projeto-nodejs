import knex from '../database/connection'

const employeeServices = async (period: any) => {
  const break_date = await knex
    .select('employee_id')
    .from('orders')
    .andWhereBetween('order_date', [period.start_date, period.end_date])
    .groupBy('employee_id')
    .count('id')

return break_date
}

export default employeeServices
