// import { useState } from 'react'

const SearchBar = () => {
  // const [employeeName, setEmployeeName] = useState('')
  return (
    <div>
      <input
        style={StyledSearchBar}
        type="text"
        placeholder="Please add the employee name"
      />
    </div>
  )
}

const StyledSearchBar = {
  width: '97%',
  borderRadius: '5px',
  border: '1px solid #333',
  textAlign: 'center',
  padding: '7px 2px',
  margin: '2px 5px',
}

export default SearchBar
