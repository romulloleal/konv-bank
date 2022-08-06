import { Navigate, Route, Routes as Router } from 'react-router-dom'

import CreateAccount from '~/pages/CreateAccount'
import Deposit from '~/pages/Deposit'
import Home from '~/pages/Home'
import Transactions from '~/pages/Transactions'
import Withdraw from '~/pages/Withdraw'

const Routes = () => {
  return (
    <Router>
      <Route path='/' element={<Home />} />
      <Route path='/create-account' element={<CreateAccount />} />
      <Route path='/deposit' element={<Deposit />} />
      <Route path='/withdraw' element={<Withdraw />} />
      <Route path='/transactions' element={<Transactions />} />

      <Route path='*' element={<Navigate to='' />} />
    </Router>
  )
}

export default Routes
