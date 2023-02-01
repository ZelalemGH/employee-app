import { createContext, useEffect, useState } from 'react'

export const EmployeesContext = createContext()

export function EmployeeProvider(props) {
  const [employees, setEmployees] = useState([0])
  const [employeeDetail, setEmployeeDetail] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    fetch(`https://lit-dusk-21328.herokuapp.com/api/employees/allemployees`)
      .then((res) => res.json()) // getting the response in a json format
      .then((data) => {
        console.log(data)
        setEmployees(data) // to update the value of employees and getting the data itself
        setEmployeeDetail(data[0])
        setIsLoading(false)
        setIsLoggedIn(true)
      })
      .catch((err) => {
        setIsError(true)
      })
  }, [])

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        employeeDetail,
        setEmployees,
        setEmployeeDetail,
        isLoading,
        isError,
        isLoggedIn,
      }}
    >
      {props.children}
    </EmployeesContext.Provider>
  )
}
