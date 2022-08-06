import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Transaction from './Transaction';

@Entity('clients')
class Client {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  cpf: string;

  @Column()
  balance: number;

  @OneToMany(() => Transaction, (transaction) => transaction.client)
  transactions: Transaction[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Client;
