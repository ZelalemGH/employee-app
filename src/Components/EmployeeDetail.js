import React from 'react'

const EmployeeDetail = ({ employees }) => {
  //   return <div>EmployeeDetail</div>
  return employees.map(
    ({ image, name, title, callOff, callMobile, sms, email }, index) => {
      return (
        <div key={index} style={StyledEmployeeDetail}>
          <img style={StyledImage} src={image} alt={image} />
          <div style={StyledContent}>
            <h3 style={{ margin: '0' }}>{name}</h3>
            <p style={{ margin: '0' }}>{title}</p>
            <h3>Call Office</h3>
            <p>{callOff}</p>
            <h3>Call Mobile</h3>
            <p>{callMobile}</p>
            <h3>SMS</h3>
            <p>{sms}</p>
            <h3>Email</h3>
            <p>{email}</p>
          </div>
        </div>
      )
    },
  )
}

const StyledImage = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#f4f4f4',
}

const StyledEmployeeDetail = {
  display: 'flex',
  gap: '10px',
  margin: '5px',
}

const StyledContent = {
  //   flex: 2,
}
export default EmployeeDetail
