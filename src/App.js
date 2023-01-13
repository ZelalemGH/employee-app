import './App.css'
// import EmployeePage from './Components/EmployeePage'
// import HomePage from './Components/HomePage'
// import Wrapper from './Components/Wrapper'
import { useState, useEffect } from 'react'
import imageOne from './assets/images/image_One.jpg'
import Form from './Components/Form'
import Home from './Components/Home'
import Employees from './Components/Employees'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'

function App() {
  // Declare a new state variable, which we'll call "employees"
  const [employees, setEmployees] = useState([0])
  useEffect(() => {
    fetch(`https://lit-dusk-21328.herokuapp.com/api/employees/allemployees`)
      .then((res) => res.json()) // getting the response in a json format
      .then((data) => {
        console.log(data)
        setEmployees(data) // to update the value of employees and getting the data itself
      })
  }, [])

  const [employeeDetail, setEmployeeDetail] = useState({
    id: 1,
    image: imageOne,
    name: 'John Doe',
    occupation: 'Front end dev',
    callOffice: '1234567',
    callMobile: '235690',
    sms: '222333444',
    email: 'solo@test.com',
  })
  // console.log('employeeDetail', employeeDetail)
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-Employees" element={<Form />} />
          <Route
            path="/employees-list"
            element={
              <Employees
                setEmployeeDetail={setEmployeeDetail}
                employeeDetail={employeeDetail}
                employees={employees}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
