import EmployeePage from './EmployeePage'
import HomePage from './HomePage'
import Wrapper from './Wrapper'
import { Alert, AlertTitle } from '@mui/material'
import { useContext } from 'react'
import { EmployeesContext } from '../EmployeesContext'

function Employees() {
  const { isError } = useContext(EmployeesContext)
  return isError ? (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      There is something wrong — <strong>Please try again later!</strong>
    </Alert>
  ) : (
    <div>
      <Wrapper>
        <HomePage />
        <EmployeePage />
      </Wrapper>
    </div>
  )
}

export default Employees
