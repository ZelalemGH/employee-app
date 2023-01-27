import Header from './Header'
import EmployeeDetail from './EmployeeDetail'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const EmployeePage = () => {
  return (
    <div style={StyledHomePage}>
      <Header title="Employee" icon={faAngleLeft} />
      <EmployeeDetail />
    </div>
  )
}

const StyledHomePage = {
  width: '50%',
}

export default EmployeePage
