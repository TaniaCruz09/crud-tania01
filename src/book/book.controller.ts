import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDTO } from './dto/bookStoreBook.dto';

@Controller('libro')
export class BookController {
  constructor(private readonly bookServiceRepo: BookService) {}

  @Post()
  create(@Body() bookDTO: CreateBookDTO) {
    return this.bookServiceRepo.create(bookDTO);
  }

  @Get()
  findAll() {
    return this.bookServiceRepo.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.bookServiceRepo.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.bookServiceRepo.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateBookDTO: CreateBookDTO,
  ) {
    return this.bookServiceRepo.update(id, updateBookDTO);
  }
}
