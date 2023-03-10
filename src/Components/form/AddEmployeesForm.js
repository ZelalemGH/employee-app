import React from 'react'
import { useState } from 'react'
import { StyledInput, StyledForm, StyledButton } from './StyledComponents'
import styled from 'styled-components'

const StyledInputs = styled.input`
  border-color: ${(props) => props.color || 'blue'};
`
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
      <form style={StyledForm} onSubmit={handleSubmit}>
        <StyledInputs
          style={StyledInput}
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
          color="#76ff03"
        />
        <StyledInputs
          style={StyledInput}
          type="text"
          placeholder="image url"
          name="image"
          onChange={handleChange}
        />
        <StyledInputs
          style={StyledInput}
          type="text"
          placeholder="occupation"
          name="occupation"
          onChange={handleChange}
          color="red"
        />
        <StyledInputs
          style={StyledInput}
          type="text"
          placeholder="callOffice"
          name="callOffice"
          onChange={handleChange}
        />
        <StyledInputs
          style={StyledInput}
          type="text"
          placeholder="callMobile"
          name="callMobile"
          onChange={handleChange}
        />
        <StyledInputs
          style={StyledInput}
          type="text"
          placeholder="sms"
          name="sms"
          onChange={handleChange}
        />
        <StyledInputs
          style={StyledInput}
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <button style={StyledButton} type="button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
