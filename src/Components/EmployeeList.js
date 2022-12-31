import EmployeeListItem from './EmployeeListItem'

const EmployeeList = (props) => {
  return (
    <div>
      <EmployeeListItem employees={props.employees} />
    </div>
  )
}

export default EmployeeList
