import React from 'react'

import { dateStringToDate } from '~/utils/convertDate'

import {
  ReportAmount,
  ReportDate,
  ReportItems,
  ReportsContainer,
} from './styles'
import { ReportsProps } from './types'

const Reports: React.FC<ReportsProps> = ({ balance, transactions }) => {
  return (
    <ReportsContainer>
      Saldo: R$ {balance.toLocaleString()}
      {transactions.map((transaction) => (
        <ReportItems reportType={transaction.type}>
          <ReportAmount>
            {transaction.type === 'in' ? 'Deposito' : 'Saque'} de R${' '}
            {transaction.amount.toLocaleString()}
          </ReportAmount>
          <ReportDate>{dateStringToDate(transaction.createdAt)}</ReportDate>
        </ReportItems>
      ))}
    </ReportsContainer>
  )
}

export default Reports
