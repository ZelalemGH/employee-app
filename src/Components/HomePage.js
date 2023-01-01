import EmployeeList from './EmployeeList'
import Header from './Header'
import SearchBar from './SearchBar'

const HomePage = ({ employees, setEmployeeDetail }) => {
  return (
    <div style={StyledHomePage}>
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList
        employees={employees}
        setEmployeeDetail={setEmployeeDetail}
      />
    </div>
  )
}

const StyledHomePage = {
  width: '50%',
}
export default HomePage
