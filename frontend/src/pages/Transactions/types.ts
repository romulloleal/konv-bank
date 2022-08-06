interface Transactions {
  id: number
  amount: number
  type: string
  createdAt: string
}

export interface ReportsProps {
  balance: number
  transactions: Transactions[]
}
