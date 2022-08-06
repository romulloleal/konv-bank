import { Box } from '@mui/material'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`
export const RegisterForm = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`
