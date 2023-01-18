import React from 'react'
import EmployeePage from './EmployeePage'
import HomePage from './HomePage'
import Wrapper from './Wrapper'
import { Alert, AlertTitle } from '@mui/material'

function employees({
  setEmployeeDetail,
  employees,
  employeeDetail,
  isLoading,
  isError,
}) {
  return isError ? (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      There is something wrong — <strong>Please try again later!</strong>
    </Alert>
  ) : (
    <div>
      <Wrapper>
        <HomePage setEmployeeDetail={setEmployeeDetail} employees={employees} />
        <EmployeePage
          employeeDetail={employeeDetail}
          employees={employees}
          isLoading={isLoading}
        />
      </Wrapper>
    </div>
  )
}

export default employees
