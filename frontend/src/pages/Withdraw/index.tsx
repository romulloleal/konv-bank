import React, { useState } from 'react'

import { Box, Button, TextField, Typography } from '@mui/material'
import { TbCurrencyReal } from 'react-icons/tb'

import PageTitle from '~/components/PageTitle'
import { api } from '~/services/api'
import { CPFMask } from '~/utils/masks'

import { Container, RegisterForm } from './style'

const Withdraw: React.FC = () => {
  const [cpf, setCpf] = useState<string | undefined>()
  const [amount, setAmount] = useState<string | undefined>()
  const [requestedNotes, setRequestedNotes] =
    useState<{ note: number; qty: number }[]>()

  const onChangeCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = CPFMask(event.target.value)
    setCpf(result)
  }

  const withdrawAmount = async (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault()
    const formatedCPF = cpf?.replace('-', '').replaceAll('.', '')

    const response = await api.post('/clients/withdraw', {
      cpf: formatedCPF,
      amount: parseInt(amount || '0', 10),
    })

    setCpf('')
    setAmount('')

    setRequestedNotes(response.data.transaction.requestedNotes)
  }
  return (
    <Container>
      <PageTitle title='Sacar' goBack='/' />

      <RegisterForm sx={{ mt: 3 }} component='form' onSubmit={withdrawAmount}>
        <TextField
          name='cpf'
          label='CPF do Sacador'
          variant='standard'
          value={cpf}
          onChange={onChangeCpf}
          size='medium'
        />

        <TextField
          type='number'
          name='amount'
          label='Quantia'
          variant='standard'
          size='medium'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          InputProps={{
            endAdornment: <TbCurrencyReal />,
            inputProps: {
              min: 1,
            },
          }}
        />

        <Button type='submit' size='small' variant='contained'>
          Sacar
        </Button>
      </RegisterForm>

      {requestedNotes ? (
        <Box sx={{ mt: 5 }}>
          <Typography variant='h5'>Confira suas notas</Typography>
          {requestedNotes.map((note) => (
            <p>
              {`${note.qty} ${note.qty > 1 ? 'notas' : 'nota'} de
              ${note.note} ${note.note > 1 ? 'reais' : 'real'}`}
            </p>
          ))}
        </Box>
      ) : (
        ''
      )}
    </Container>
  )
}

export default Withdraw
