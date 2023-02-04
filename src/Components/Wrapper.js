import styled from 'styled-components'

const StyledWrapper = styled.div`
  min-width: 800px;
  margin: 0 auto;
  background-color: #e3f2fd;
  display: flex;
  gap: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 599px) {
    margin-top: 5rem;
    flex-direction: column;
    align-items: center;
    margin-left: 100px;
    gap: 30px;
    top: 82%;
  }
`
const Wrapper = (props) => {
  return <StyledWrapper>{props.children}</StyledWrapper>
}

export default Wrapper
