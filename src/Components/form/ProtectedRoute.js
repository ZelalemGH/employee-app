import { useContext } from "react";
import { EmployeesContext } from "../../EmployeesContext";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(EmployeesContext);
  

  return isAuthenticated === true
    ? children
    : navigate({ pathname: "/employee-app", replace: true });
}

export default ProtectedRoute;
