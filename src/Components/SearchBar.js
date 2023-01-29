import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
`
const SearchBar = (props) => {
  const [searchName, setsearchName] = useState('')

  const handleInput = (e) => {
    const name = e.target.value
    setsearchName(name)
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setsearchName(searchName)
    }
  }
  return (
    <StyledSearch>
      <input
        onChange={handleInput}
        value={searchName}
        style={StyledSearchBar}
        type="text"
        placeholder="Search by name"
      />
      <FontAwesomeIcon
        style={StyledSearchIcon}
        onClick={handleSearch}
        icon={faSearch}
      />
    </StyledSearch>
  )
}

const StyledSearchBar = {
  width: '100%',
  borderRadius: '15px',
  fontSize: '15px',
  border: '1px solid #333',
  padding: '7px 2px',
  margin: '5px 5px',
  height: '20px',
}

const StyledSearchIcon = {
  position: 'absolute',
  right: '53%',
  cursor: 'pointer',
}

export default SearchBar
