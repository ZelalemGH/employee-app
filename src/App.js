import './App.css'
import Form from './Components/form/AddEmployeesForm'
import Home from './Components/Home'
import Employees from './Components/Employees'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import { EmployeeProvider } from './EmployeesContext'
import Article from './Components/Article.js'
import Login  from './Components/Login'
import Register from './Components/Register'


function App() {
  return (
    <EmployeeProvider>
      <BrowserRouter>
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/employee-app" element={<Home />} />
            <Route path="/add-Employees" element={<Form />} />
            <Route path="/employees-list" element={<Employees />} />
            <Route path="/article" element={<Article />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} /> 
          </Routes>
        </div>
      </BrowserRouter>
    </EmployeeProvider>
  )
}

export default App
