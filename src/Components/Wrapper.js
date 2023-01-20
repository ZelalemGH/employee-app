import styled from 'styled-components'

const StyledWrapper = styled.div`
  min-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  gap: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Wrapper = (props) => {
  return <StyledWrapper>{props.children}</StyledWrapper>
}

export default Wrapper
