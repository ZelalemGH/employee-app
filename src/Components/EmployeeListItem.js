// import { useState } from 'react'

const EmployeeListItem = ({ employees }) => {
  //   const [isOpen, setIsOpen] = useState(false)
  return employees.map(({ image, name, title }, index) => {
    return (
      <div key={index} style={StyledEmployeeListItem}>
        <img style={StyledImage} src={image} alt={image} />
        <div style={StyledContent}>
          <h3 style={{ margin: '0' }}>{name}</h3>
          <p style={{ margin: '0' }}>{title}</p>
        </div>
      </div>
    )
  })
}

const StyledImage = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#f4f4f4',
}

const StyledEmployeeListItem = {
  display: 'flex',
  gap: '10px',
  margin: '5px',
}

const StyledContent = {
  //   flex: 2,
}

export default EmployeeListItem
