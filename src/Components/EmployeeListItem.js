// import { useState } from 'react'

const EmployeeListItem = ({ image, name, title, onClick }) => {
  //   const [isOpen, setIsOpen] = useState(false)
  // return employees.map(({ image, name, title }, index) => {
  return (
    <div style={StyledEmployeeListItem} onClick={onClick}>
      <img style={StyledImage} src={image} alt={image} />
      <div style={StyledContent}>
        <h3 style={{ margin: '0' }}>{name}</h3>
        <p style={{ margin: '0' }}>{title}</p>
      </div>
    </div>
  )
  // })
}

const StyledImage = {
  width: '55px',
  height: '55px',
  borderRadius: '50%',
}

const StyledEmployeeListItem = {
  display: 'flex',
  gap: '10px',
  margin: '8px',
  padding: '5px',
  backgroundColor: '#f4f4f4',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
  cursor: 'pointer',
}

const StyledContent = {
  //   flex: 2,
}

export default EmployeeListItem
