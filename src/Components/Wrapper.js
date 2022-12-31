const Wrapper = (props) => {
  return <div style={StyledWrapper}>{props.children}</div>
}

const StyledWrapper = {
  maxWidth: '700px',
  margin: '0 auto',
  backgroundColor: '#fff',
  display: 'flex',
  gap: '10px',
}

export default Wrapper
