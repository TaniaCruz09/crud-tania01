import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  bookID: string;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  autor: string;

  @Column({ type: 'text' })
  editorial: string;

  @Column({ type: 'text' })
  genre: string;
}
