import { getRepository } from 'typeorm';
import AppError from '../../errors/AppError';

import Client from '../../models/Client'
import Transaction from '../../models/Transaction';

interface Response {
  balance: number;
  transactions: Transaction[],
}

class GetClientTransactionsService {
  public async execute(cpf: string): Promise<Response> {
    const clientsRepository = getRepository(Client);

    const client = await clientsRepository.findOne({
      where: {cpf},
      relations: ['transactions'],
    })

    if(!client) throw new AppError('Não foram encontradas transações para este CPF')

    const transactions = client.transactions.reverse()
    const balance = client.balance

    return {balance, transactions}
  }
}

export default GetClientTransactionsService;
