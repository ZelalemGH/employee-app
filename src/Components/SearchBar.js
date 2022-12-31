const SearchBar = () => {
  return (
    <div>
      <input style={StyledSearchBar} type="text" placeholder="Search" />
    </div>
  )
}

const StyledSearchBar = {
  width: '95%',
  borderRadius: '5px',
  border: '1px solid #333',
  textAlign: 'center',
  padding: '7px 0px',
  margin: '2px 2px',
}

export default SearchBar
