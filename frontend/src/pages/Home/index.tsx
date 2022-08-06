import React from 'react'

import MenuOptions from '~/components/MenuOptions'

const Home: React.FC = () => {
  const options = [
    { text: 'Criar Conta', path: '/create-account' },
    { text: 'Depositar', path: '/deposit' },
    { text: 'Sacar', path: '/withdraw' },
    { text: 'Saldo e Extrato', path: '/transactions' },
  ]
  return <MenuOptions options={options} />
}

export default Home
