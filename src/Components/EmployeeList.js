import EmployeeListItem from './EmployeeListItem'

const EmployeeList = (props) => {
  // return (
  //   <div>
  //     <EmployeeListItem employees={props.employees} />
  //   </div>
  // )
  console.log('check employee', props)
  if (props.employees) {
    return props.employees.map(({ image, name, occupation }, index) => {
      return (
        <EmployeeListItem
          key={index}
          image={image}
          name={name}
          occupation={occupation}
          onClick={() => props.setEmployeeDetail(props.employees[index])}
        />
      )
    })
  }
}

export default EmployeeList
