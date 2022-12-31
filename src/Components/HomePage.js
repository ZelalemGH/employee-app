import EmployeeList from './EmployeeList'
import Header from './Header'
import SearchBar from './SearchBar'

const HomePage = (props) => {
  return (
    <div style={StyledHomePage}>
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList employees={props.employees} />
    </div>
  )
}

const StyledHomePage = {
  width: '50%',
  backgroundColor: '#B2EBF2',
}
export default HomePage
