import Header from './Header'
import EmployeeDetail from './EmployeeDetail'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const EmployeePage = (props) => {
  return (
    <div style={StyledHomePage}>
      <Header title="Employee" icon={faAngleLeft} />
      <EmployeeDetail
        employees={props.employees}
        employeeDetail={props.employeeDetail}
        isLoading={props.isLoading}
        isError={props.isError}
      />
    </div>
  )
}

const StyledHomePage = {
  width: '50%',
}
export default EmployeePage
