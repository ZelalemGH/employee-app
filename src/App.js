import './App.css'
import { useState, useEffect } from 'react'
import Form from './Components/Form'
import Home from './Components/Home'
import Employees from './Components/Employees'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'

function App() {
  // Declare a new state variable, which we'll call "employees"
  const [employees, setEmployees] = useState([0])
  const [employeeDetail, setEmployeeDetail] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  console.log('isLoading', isLoading)
  useEffect(() => {
    fetch(`https://lit-dusk-21328.herokuapp.com/api/employees/allemployees`)
      .then((res) => res.json()) // getting the response in a json format
      .then((data) => {
        console.log(data)
        setEmployees(data) // to update the value of employees and getting the data itself
        setEmployeeDetail(data[0])
        setIsLoading(false)
      })
      .catch((err) => {
        setIsError(true)
      })
  }, [])

  return (
    <BrowserRouter>
      <NavBar isLoggedIn={isLoggedIn} />
      <div className="App">
        <Routes>
          <Route
            path="/employee-app"
            element={<Home setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/add-Employees" element={<Form />} />

          <Route
            path="/employees-list"
            element={
              <Employees
                setEmployeeDetail={setEmployeeDetail}
                employeeDetail={employeeDetail}
                employees={employees}
                isLoading={isLoading}
                isError={isError}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
