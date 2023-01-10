import './App.css'
import EmployeePage from './Components/EmployeePage'
import HomePage from './Components/HomePage'
import Wrapper from './Components/Wrapper'
import { useState, useEffect } from 'react'
import imageOne from './assets/images/image_One.jpg'
import Form from './Components/Form'

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

  // Declare a new state variable, which we'll call "employeeDetail"
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
  console.log('employeeDetail', employeeDetail)
  return (
    <div className="App">
      <Form />
      <Wrapper>
        <HomePage setEmployeeDetail={setEmployeeDetail} employees={employees} />
        <EmployeePage employeeDetail={employeeDetail} employees={employees} />
      </Wrapper>
    </div>
  )
}

export default App
