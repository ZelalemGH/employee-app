const Wrapper = (props) => {
  return <div style={StyledWrapper}>{props.children}</div>
}

const StyledWrapper = {
  maxWidth: '1000px',
  margin: '0 auto',
  backgroundColor: '#fff',
  display: 'flex',
  gap: '10px',
  paddingTop: '20px',
}

export default Wrapper
