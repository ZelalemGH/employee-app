import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import styled from 'styled-components'

const EmployeeDetail = ({ employeeDetail, isLoading }) => {
  const StyledEmployeeDetail = styled.div`
    display: flex;
    gap: 15px;
    margin: 5px;
    border-bottom: 2px solid #f4f4f4;
    padding: 10px 0;
    align-items: center;
  `
  const Image = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
  `

  const StyledUl = styled.ul`
    border-bottom: 2px solid #f4f4f4;
    padding: 5px;
    list-style: none;
  `

  if (isLoading) {
    return (
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={80} height={80} />
        <Skeleton variant="rectangular" width={400} height={70} />
        <Skeleton variant="rectangular" width={400} height={70} />
        <Skeleton variant="rectangular" width={400} height={70} />
        <Skeleton variant="rectangular" width={400} height={70} />
      </Stack>
    )
  }
  return (
    <div>
      <StyledEmployeeDetail>
        <Image src={employeeDetail.image} alt={employeeDetail.image} />
        <div>
          <h3>{employeeDetail.name}</h3>
          <p>{employeeDetail.occupation}</p>
        </div>
      </StyledEmployeeDetail>
      <StyledUl>
        <li>
          <h3>Call Office</h3>
          <p>{employeeDetail.callOffice}</p>
        </li>
      </StyledUl>
      <StyledUl>
        <li>
          <h3>Call Mobile</h3>
          <p>{employeeDetail.callMobile}</p>
        </li>
      </StyledUl>
      <StyledUl>
        <li>
          <h3>SMS</h3>
          <p>{employeeDetail.sms}</p>
        </li>
      </StyledUl>
      <StyledUl>
        <li>
          <h3>Email</h3>
          <p>{employeeDetail.email}</p>
        </li>
      </StyledUl>
    </div>
  )
}

export default EmployeeDetail
