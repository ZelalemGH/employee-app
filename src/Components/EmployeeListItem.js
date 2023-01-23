import React from 'react'
import { Paper } from '@mui/material'
import styled from 'styled-components'

const EmployeeListItem = ({ image, name, occupation, onClick }) => {
  const StyledCard = styled(Paper)`
    padding: 0.5rem 0.25rem;
    margin: 0.5rem;
  `
  return (
    <StyledCard elevation={3}>
      <div style={StyledEmployeeListItem} onClick={onClick}>
        <img style={StyledImage} src={image} alt={image} />
        <div>
          <h3 style={{ margin: '0' }}>{name}</h3>
          <p style={{ margin: '0' }}>{occupation}</p>
        </div>
      </div>
    </StyledCard>
  )
}

const StyledImage = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
}

const StyledEmployeeListItem = {
  display: 'flex',
  gap: '10px',
  margin: '5px',
  cursor: 'pointer',
}

export default EmployeeListItem
