import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
`
const SearchBar = (props) => {
  return (
    <StyledSearch>
      <input style={StyledSearchBar} type="text" placeholder="Search by name" />
      <FontAwesomeIcon icon={faSearch} />
    </StyledSearch>
  )
}

const StyledSearchBar = {
  width: '100%',
  borderRadius: '5px',
  border: '1px solid #333',
  padding: '7px 2px',
  margin: '5px 5px',
  height: '20px',
}

export default SearchBar
