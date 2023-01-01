import EmployeeListItem from './EmployeeListItem'

const EmployeeList = (props) => {
  // return (
  //   <div>
  //     <EmployeeListItem employees={props.employees} />
  //   </div>
  // )
  return props.employees.map(({ image, name, title }, index) => {
    return (
      <EmployeeListItem
        key={index}
        image={image}
        name={name}
        title={title}
        onClick={() => props.setEmployeeDetail(props.employees[index])}
      />
    )
  })
}

export default EmployeeList
