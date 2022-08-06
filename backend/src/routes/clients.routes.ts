import { Router } from 'express';
import CreateClientService from '../services/clients/CreateClientService';
import CreateTransactionService from '../services/clients/CreateTransactionService';
import GetClientTransactionsService from '../services/clients/GetClientTransactionsService';

const clientsRouter = Router();

clientsRouter.post('/createAccount', async (request, response) => {
  const { cpf } = request.body;

  const createClient = new CreateClientService();

  await createClient.execute(cpf);

  return response.json({message: "Conta criada com sucesso"});
});

clientsRouter.post('/deposit', async (request, response) => {
  const { cpf, amount } = request.body;

  const createTransaction = new CreateTransactionService();

  await createTransaction.execute({ cpf, amount, type: 'in' });

  return response.json({message: "Deposito efetuado com sucesso"});
});

clientsRouter.post('/withdraw', async (request, response) => {
  const { cpf, amount } = request.body;

  const createTransaction = new CreateTransactionService();

  const transaction = await createTransaction.execute({ cpf, amount, type: 'out' });

  return response.json({message: "Saque efetuado com sucesso.", transaction});
});

clientsRouter.get('/transactions/:cpf', async (request, response) => {
  const { cpf } = request.params;

  const getTransactions = new GetClientTransactionsService();

  const transactions = await getTransactions.execute(cpf);

  return response.json(transactions);
});

export default clientsRouter;
