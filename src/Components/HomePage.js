import EmployeeList from './EmployeeList'
import Header from './Header'
import SearchBar from './SearchBar'

const HomePage = ({ employees }) => {
  return (
    <div style={StyledHomePage}>
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList employees={employees} />
    </div>
  )
}

const StyledHomePage = {
  width: '50%',
  backgroundColor: '#B2EBF2',
}
export default HomePage
