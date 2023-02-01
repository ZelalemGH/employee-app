import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  width: 50%;
  padding: 0 40px;
  margin: 2px 2px;
  text-align: center;
  color: ${(props) => props.color};
`
const Header = ({ title, icon }) => {
  return (
    <StyledHeader>
      <FontAwesomeIcon size="2x" icon={icon} />
      <h3>{title}</h3>
    </StyledHeader>
  )
}

export default Header
