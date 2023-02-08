import { useContext } from 'react'
import { Paper } from '@mui/material'
import styled from 'styled-components'
import { EmployeesContext } from '../EmployeesContext'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

const StyledCard = styled(Paper)`
  padding: 0.5rem 0.25rem;
  margin: 0.5rem;
`
const EmployeeListItem = () => {
  const { employees, setEmployeeDetail } = useContext(EmployeesContext)
  const { isLoading } = useContext(EmployeesContext)
  if (isLoading) {
    return (
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton
          style={{ margin: '1rem' }}
          variant="circular"
          width={60}
          height={60}
        />
        <Skeleton
          style={{ margin: '1rem' }}
          variant="circular"
          width={60}
          height={60}
        />
        <Skeleton
          style={{ margin: '1rem' }}
          variant="circular"
          width={60}
          height={60}
        />
        <Skeleton
          style={{ margin: '1rem' }}
          variant="circular"
          width={60}
          height={60}
        />
        <Skeleton
          style={{ margin: '1rem' }}
          variant="circular"
          width={60}
          height={60}
        />
        <Skeleton
          style={{ margin: '1rem' }}
          variant="circular"
          width={60}
          height={60}
        />
        <Skeleton
          style={{ margin: '1rem' }}
          variant="circular"
          width={60}
          height={60}
        />
      </Stack>
    )
  }
  return (
    employees &&
    employees?.map(({ image, name, occupation }, index) => {
      const handleEmployeeDetail = () => {
        setEmployeeDetail(employees[index])
      }
      return (
        <StyledCard elevation={3}>
          <div
            key={index}
            style={StyledEmployeeListItem}
            onClick={handleEmployeeDetail}
          >
            <img style={StyledImage} src={image} alt={image} />
            <div>
              <h3 style={{ margin: '0' }}>{name}</h3>
              <p style={{ margin: '0' }}>{occupation}</p>
            </div>
          </div>
        </StyledCard>
      )
    })
  )
}

const StyledImage = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
}

const StyledEmployeeListItem = {
  display: 'flex',
  gap: '10px',
  margin: '5px',
  cursor: 'pointer',
}

export default EmployeeListItem
