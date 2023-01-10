import EmployeeList from './EmployeeList'
import Header from './Header'
import SearchBar from './SearchBar'

const HomePage = ({ employees, setEmployeeDetail }) => {
  // console.log()
  return (
    <div style={StyledHomePage}>
      <div style={StyledHeaderContent}>
        <Header title="Employee Directory" />
      </div>
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

const StyledHeaderContent = {
  width: '100%',
  marginLeft: '150px',
}
export default HomePage
