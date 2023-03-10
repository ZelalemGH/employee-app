import { createContext, useEffect, useState } from "react";

export const EmployeesContext = createContext();

export function EmployeeProvider(props) {
  const [employees, setEmployees] = useState([]);
  const [employeeDetail, setEmployeeDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // const decodedToken = jwt_decode(token)
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    //clear the token from the local storage
    localStorage.removeItem("token");
    //navigate to the Home page
    setIsAuthenticated(false);
  };

  useEffect(() => {
    fetch(
      `https://cryptic-wildwood-26961.herokuapp.com/api/employee/getallemployees`
    )
      .then((res) => res.json()) // getting the response in a json format
      .then((data) => {
        // console.log(data)
        setEmployees(data); // to update the value of employees and getting the data itself
        setEmployeeDetail(data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        employeeDetail,
        setEmployeeDetail,
        isLoading,
        isError,
        setEmployees,
        isAuthenticated,
        setIsAuthenticated,
        handleLogout,
      }}
    >
      {props.children}
    </EmployeesContext.Provider>
  );
}
