export const StyledForm = {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  width: '40%',
}

export const StyledInput = {
  padding: '10px 5px',
  margin: '5px',
  size: '10',
  borderRadius: '5px',
  '&:focus': {
    outline: 'none',
  },
}

export const StyledButton = {
  height: '40px',
  color: '#fff',
  backgroundColor: '#000',
  margin: '5px',
  fontSize: '22px',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#333',
    color: '#fff',
  },
  cursor: 'pointer',
}
