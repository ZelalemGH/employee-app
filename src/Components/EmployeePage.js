import Header from './Header'
import EmployeeDetail from './EmployeeDetail'

const EmployeePage = (props) => {
  return (
    <div style={StyledHomePage}>
      <Header title="Employee" />
      <EmployeeDetail employees={props.employees[1]} />
    </div>
  )
}

const StyledHomePage = {
  width: '50%',
  backgroundColor: '#FFF9C4',
}
export default EmployeePage
