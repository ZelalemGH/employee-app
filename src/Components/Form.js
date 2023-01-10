import React from 'react'
import { useState } from 'react'

const Form = () => {
  //Inside the `Form` component create two states called `name` and `occupation`
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [occupation, setOccupation] = useState('')
  const [callOffice, setCallOffice] = useState('')
  const [callMobile, setCallMobile] = useState('')
  const [sms, setSms] = useState('')
  const [email, setEmail] = useState('')

  const handleImage = (event) => {
    console.log(event.target.value)
    setImage(event.target.value)
  }

  const handleName = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }

  const handleOccupation = (event) => {
    console.log(event.target.value)
    setOccupation(event.target.value)
  }

  const handleCallOffice = (event) => {
    console.log(event.target.value)
    setCallOffice(event.target.value)
  }

  const handleCallMobile = (event) => {
    console.log(event.target.value)
    setCallMobile(event.target.value)
  }

  const handleSms = (event) => {
    console.log(event.target.value)
    setSms(event.target.value)
  }

  const handleEmail = (event) => {
    console.log(event.target.value)
    setEmail(event.target.value)
  }

  return (
    <div>
      <form className="wrapper">
        <p className="StyledPara">
          <strong>Add employee</strong>
        </p>
        <input
          type="text"
          placeholder="url"
          onChange={handleImage}
          value={image}
        />
        <input
          type="text"
          placeholder="name"
          onChange={handleName}
          value={name}
          //   maxlength="50"
          //   enterkeyhint="next"
        />
        <input
          type="text"
          placeholder="occupation"
          onChange={handleOccupation}
          value={occupation}
        />
        <input
          type="text"
          placeholder="callOffice"
          onChange={handleCallOffice}
          value={callOffice}
        />
        <input
          type="text"
          placeholder="callMobile"
          onChange={handleCallMobile}
          value={callMobile}
        />
        <input type="text" placeholder="sms" onChange={handleSms} value={sms} />
        <input
          type="text"
          placeholder="email"
          onChange={handleEmail}
          value={email}
        />
        <button type="button" class="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  )
}
export default Form
