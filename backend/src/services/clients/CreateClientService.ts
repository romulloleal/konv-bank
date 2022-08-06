import { getRepository } from 'typeorm';
import AppError from '../../errors/AppError';

import Client from '../../models/Client'
import { ValidateCPF } from '../ValidateCPF';

class CreateClientService {
  public async execute(cpf: string): Promise<Client> {
    const clientsRepository = getRepository(Client);

    const validateCpf = await ValidateCPF(cpf);

    if(!validateCpf) throw new AppError('CPF inválido');

    const checkCpfExists = await clientsRepository.findOne({
      where: { cpf },
    });

    if (checkCpfExists) throw new AppError('CPF já está em uso');

    const client = clientsRepository.create({
      cpf,
    });

    await clientsRepository.save(client);

    return client;
  }
}

export default CreateClientService;
