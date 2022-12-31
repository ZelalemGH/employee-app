const Wrapper = (props) => {
  return <div style={StyledWrapper}>{props.children}</div>
}

const StyledWrapper = {
  maxWidth: '1000px',
  margin: '0 auto',
  backgroundColor: '#fff',
  display: 'flex',
  gap: '10px',
}

export default Wrapper
