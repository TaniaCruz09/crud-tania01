import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  customerID: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', nullable: true })
  email: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'numeric', nullable: true })
  phone: number;
}
