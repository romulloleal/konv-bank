import { getRepository } from 'typeorm';
import AppError from '../../errors/AppError';

import Client from '../../models/Client'
import Transaction from '../../models/Transaction';
import { RequestedNotes } from '../RequestedNotes';

interface Request {
  cpf: string;
  amount: number;
  type: 'in' | 'out';
}

interface Response {
  transaction: Transaction;
  requestedNotes?: {note: number, qty: number}[]
}

class CreateTransactionService {
  public async execute({
    cpf,
    amount,
    type
  }: Request): Promise<Response> {
    const clientsRepository = getRepository(Client);
    const transactionRepository = getRepository(Transaction);

    if(!Number.isInteger(amount)) throw new AppError('Utilize apenas números inteiros para a transação')

    if(amount <= 0) throw new AppError('Valor da transação deve ser maior do que 0')

    const client = await clientsRepository.findOne({
      where: { cpf },
    });

    if (!client) throw new AppError('CPF não encontrado');

    if(client.balance < amount && type === 'out') throw new AppError('Saldo insuficiente para esta quantia')

    const transaction = transactionRepository.create({
      amount,
      clientId: client.id,
      type
    });

    const balance =
      type === 'in'
      ? client.balance + amount
      : client.balance - amount

    await transactionRepository.save(transaction);

    await clientsRepository.update({id: client.id}, {balance: balance})

    const requestedNotes = type === 'out' ? await RequestedNotes(amount) : undefined

    const response = {transaction, requestedNotes}

    return response
  }
}

export default CreateTransactionService;
