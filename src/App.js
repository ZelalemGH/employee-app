import "./App.css";
import Form from "./Components/form/AddEmployeesForm";
import Home from "./Components/Home";
import Employees from "./Components/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { EmployeeProvider } from "./EmployeesContext";
import Article from "./Components/Article.js";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ProtectedRoute from "./Components/form/ProtectedRoute";

function App() {
  return (
    <EmployeeProvider>
      <BrowserRouter>
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/employee-app" element={<Home />} />
            <Route
              path="/add-Employees"
              element={
                <ProtectedRoute>
                  <Form />
                </ProtectedRoute>
              }
            />
            <Route
              path="/employees-list"
              element={
                <ProtectedRoute>
                  <Employees />
                </ProtectedRoute>
              }
            />
            <Route
              path="/article"
              element={
                <ProtectedRoute>
                  <Article />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </EmployeeProvider>
  );
}

export default App;
