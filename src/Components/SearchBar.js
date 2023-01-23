const SearchBar = () => {
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
  width: '95%',
  borderRadius: '5px',
  border: '1px solid #333',
  padding: '7px 2px',
  margin: '2px 5px',
}

export default SearchBar
