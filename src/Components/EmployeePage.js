import Header from './Header'
import EmployeeDetail from './EmployeeDetail'

const EmployeePage = (props) => {
  return (
    <div style={StyledHomePage}>
      <Header title="Employee" />
      <EmployeeDetail
        employees={props.employees}
        employeeDetail={props.employeeDetail}
      />
    </div>
  )
}

const StyledHomePage = {
  width: '50%',
}
export default EmployeePage
