import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/bookStoreBook.entity';
import { CreateBookDTO } from './dto/bookStoreBook.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async create(bookDTO: CreateBookDTO) {
    const book = this.bookRepository.create(bookDTO);
    await this.bookRepository.save(book);

    return book;
  }

  findAll() {
    return this.bookRepository.find();
  }

  findOne(bookID: string) {
    return this.bookRepository.findOneBy({ bookID });
  }

  async remove(bookID: string) {
    const book = await this.findOne(bookID);
    await this.bookRepository.remove(book);
    return 'Libro eliminado satisfactoriamente';
  }

  async update(bookID: string, cambios: CreateBookDTO) {
    const findBook = await this.findOne(bookID);
    const updatedBook = await this.bookRepository.merge(findBook, cambios);
    return this.bookRepository.save(updatedBook);
  }
}
