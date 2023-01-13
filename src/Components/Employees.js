import React from 'react'
import EmployeePage from './EmployeePage'
import HomePage from './HomePage'
import Wrapper from './Wrapper'

function employees({ setEmployeeDetail, employees, employeeDetail }) {
  return (
    <div>
      <Wrapper>
        <HomePage setEmployeeDetail={setEmployeeDetail} employees={employees} />
        <EmployeePage employeeDetail={employeeDetail} employees={employees} />
      </Wrapper>
    </div>
  )
}

export default employees
