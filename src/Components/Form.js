import React from 'react'
import { useState } from 'react'

const Form = () => {
  const [employeesData, setEmployeesData] = useState({
    name: '',
    image: '',
    occupation: '',
    callOffice: '',
    callMobile: '',
    sms: '',
    email: '',
  })

  function handleChange(event) {
    const updatedUserData = {
      ...employeesData,
      [event.target.name]: event.target.value,
    }
    setEmployeesData(updatedUserData)
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch(`https://lit-dusk-21328.herokuapp.com/api/employees/allemployees`, {
      method: 'POST',
      body: JSON.stringify(employeesData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Add Employee</h1>
      <form style={styledForm} onSubmit={handleSubmit}>
        <input
          style={styledInput}
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
        />
        <input
          style={styledInput}
          type="text"
          placeholder="image url"
          name="image"
          onChange={handleChange}
        />
        <input
          style={styledInput}
          type="text"
          placeholder="occupation"
          name="occupation"
          onChange={handleChange}
        />
        <input
          style={styledInput}
          type="text"
          placeholder="callOffice"
          name="callOffice"
          onChange={handleChange}
        />
        <input
          style={styledInput}
          type="text"
          placeholder="callMobile"
          name="callMobile"
          onChange={handleChange}
        />
        <input
          style={styledInput}
          type="text"
          placeholder="sms"
          name="sms"
          onChange={handleChange}
        />
        <input
          style={styledInput}
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <button style={styledButton} type="button">
          Submit
        </button>
      </form>
    </div>
  )
}

const styledInput = {
  borderRadius: '5px',
  fontSize: '1rem',
  padding: '0.25rem 1rem',
}

const styledButton = {
  border: 'none',
  borderRadius: '8px',
  color: '#fff',
  padding: '0.5rem 1rem',
  backgroundColor: '#333',
  fontSize: '1.5rem',
}

const styledForm = {
  display: 'flex',
  flexDirection: 'column',
  padding: '3px 2px',
  margin: '20px auto',
  rowGap: '15px',
  justifyContent: 'center',
  width: '40%',
}

export default Form
