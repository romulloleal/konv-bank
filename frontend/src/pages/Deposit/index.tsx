import React, { useState } from 'react'

import { Button, TextField } from '@mui/material'
import { TbCurrencyReal } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

import PageTitle from '~/components/PageTitle'
import { api } from '~/services/api'
import { CPFMask } from '~/utils/masks'

import { Container, RegisterForm } from './style'

const Deposit: React.FC = () => {
  const [cpf, setCpf] = useState<string | undefined>()
  const [amount, setAmount] = useState<string | undefined>()

  const navigate = useNavigate()

  const onChangeCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = CPFMask(event.target.value)
    setCpf(result)
  }

  const depositAmount = async (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault()
    const formatedCPF = cpf?.replace('-', '').replaceAll('.', '')

    await api.post('/clients/deposit', {
      cpf: formatedCPF,
      amount: parseInt(amount || '0', 10),
    })

    navigate('/')
  }
  return (
    <Container>
      <PageTitle title='Depositar' goBack='/' />

      <RegisterForm sx={{ mt: 3 }} component='form' onSubmit={depositAmount}>
        <TextField
          name='cpf'
          label='CPF do Recebedor'
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
          Depositar
        </Button>
      </RegisterForm>
    </Container>
  )
}

export default Deposit
