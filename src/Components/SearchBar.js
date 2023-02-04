import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext } from 'react'
import { EmployeesContext } from '../EmployeesContext'

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
`

const StyledInput = styled.input`
  border-color: ${(props) => props.color || 'blue'};
  width: 90%;
  border-radius: 8px;
  padding: 7px 10px;
  margin: 2px 9px;
  height: 30px;
  font-size: 15px;
  :hover {
    background: #ffebee;
  }
`
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const { employees, setEmployeeDetail, setEmployees } = useContext(
    EmployeesContext,
  )

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  // const handleSearch = (event) => {
  //const searchedValue = employees.filter((item) => item.name.toLowerCase().includes(event.target.value.toLowerCase()))
  //if (searchValue == '') {
  //     return item
  //   } else if (item.name.toLowerCase().includes(searchValue.toLowerCase()))
  //   return item.name})
  //   setSearchValue(searchedValue)
  //   setEmployees(searchedValue)
  //   setEmployeeDetail(searchedValue[0])
  // }

  const handleSearch = () => {
    const searchedValue = employees.filter((item) => {
      const searchName = item.name.toLowerCase()
      const searchLowerValue = searchValue.toLowerCase()

      return searchLowerValue === searchName
    })
    setEmployees(searchedValue)
    setEmployeeDetail(searchedValue[0])
  }
  return (
    <StyledSearch>
      <StyledInput
        type="text"
        placeholder="Search employee name"
        onChange={handleChange}
      />
      <FontAwesomeIcon
        style={StyledSearchIcon}
        icon={faSearch}
        onClick={handleSearch}
      />
    </StyledSearch>
  )
}

// const StyledSearchBar = {
//   width: '95%',
//   borderRadius: '5px',
//   padding: '7px 5px',
//   margin: '2px 9px',
// }

const StyledSearchIcon = {
  cursor: 'pointer',
  backgroundColor: '#81D4FA',
  width: '15px',
  height: '15px',
  padding: '9px 10px',
  borderRadius: '50%',
  marginLeft: '-50px',
}

export default SearchBar
