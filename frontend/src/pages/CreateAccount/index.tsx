import React, { useState } from 'react'

import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import PageTitle from '~/components/PageTitle'
import { api } from '~/services/api'
import { CPFMask } from '~/utils/masks'

import { Container, RegisterForm } from './style'

const CreateAccount: React.FC = () => {
  const [cpf, setCpf] = useState<string | undefined>()

  const navigate = useNavigate()

  const onChangeCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = CPFMask(event.target.value)
    setCpf(result)
  }

  const createAccount = async (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault()
    const formatedCPF = cpf?.replace('-', '').replaceAll('.', '')

    await api.post('/clients/createAccount', {
      cpf: formatedCPF,
    })

    navigate('/')
  }
  return (
    <Container>
      <PageTitle title='Criar Conta' goBack='/' />

      <RegisterForm sx={{ mt: 3 }} component='form' onSubmit={createAccount}>
        <TextField
          name='cpf'
          label='Digite o seu CPF'
          variant='standard'
          value={cpf}
          onChange={onChangeCpf}
          size='medium'
        />

        <Button type='submit' size='small' variant='contained'>
          Criar Conta
        </Button>
      </RegisterForm>
    </Container>
  )
}

export default CreateAccount
