import React from 'react'

const EmployeeDetail = ({ employeeDetail }) => {
  return (
    <div style={StyledEmployeeDetailPage}>
      <div style={StyledEmployeeDetail}>
        <img
          style={StyledImage}
          src={employeeDetail.image}
          alt={employeeDetail.image}
        />
        <div>
          <h4 style={{ margin: '0' }}>{employeeDetail.name}</h4>
          <p style={{ margin: '0' }}>{employeeDetail.title}</p>
        </div>
      </div>
      <div>
        <ul style={StyledUl}>
          <li>
            <h3>Call Office</h3>
            <p>{employeeDetail.callOff}</p>
          </li>
        </ul>
        <ul style={StyledUl}>
          <li>
            <h3>Call Mobile</h3>
            <p>{employeeDetail.callMobile}</p>
          </li>
        </ul>
        <ul style={StyledUl}>
          <li>
            <h3>SMS</h3>
            <p>{employeeDetail.sms}</p>
          </li>
        </ul>
        <ul style={StyledUl}>
          <li>
            <h3>Email</h3>
            <p>{employeeDetail.email}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
const StyledImage = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
}

const StyledEmployeeDetail = {
  display: 'flex',
  gap: '15px',
  margin: '5px',
  borderBottom: '2px solid #f4f4f4',
  padding: '10px 0',
  alignItems: 'center',
}

const StyledEmployeeDetailPage = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  border: '2px solid #f4f4f4',
  marginRight: '10px',
}

const StyledUl = {
  borderBottom: '2px solid #f4f4f4',
  padding: '5px',
  listStyle: 'none',
}

export default EmployeeDetail
