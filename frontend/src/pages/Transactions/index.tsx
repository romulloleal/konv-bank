import React, { useState } from 'react'

import { Box, Button, TextField } from '@mui/material'

import PageTitle from '~/components/PageTitle'
import Reports from '~/components/Reports'
import { api } from '~/services/api'
import { CPFMask } from '~/utils/masks'

import { Container, RegisterForm } from './style'
import { ReportsProps } from './types'

const Transactions: React.FC = () => {
  const [cpf, setCpf] = useState<string | undefined>()
  const [reports, setReports] = useState<ReportsProps>()

  const onChangeCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = CPFMask(event.target.value)
    setCpf(result)
  }

  const withdrawAmount = async (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault()
    const formatedCPF = cpf?.replace('-', '').replaceAll('.', '')

    const response = await api.get(`/clients/transactions/${formatedCPF}`)

    setReports(response.data)
  }
  return (
    <Container>
      <PageTitle title='Saldo e Transações' goBack='/' />

      <RegisterForm sx={{ mt: 3 }} component='form' onSubmit={withdrawAmount}>
        <TextField
          name='cpf'
          label='Digite seu CPF'
          variant='standard'
          value={cpf}
          onChange={onChangeCpf}
          size='medium'
        />

        <Button type='submit' size='small' variant='contained'>
          Imprimir Relatório
        </Button>
      </RegisterForm>

      {reports ? (
        <Box sx={{ mt: 5 }}>
          <Reports
            transactions={reports.transactions}
            balance={reports.balance}
          />
        </Box>
      ) : (
        ''
      )}
    </Container>
  )
}

export default Transactions
