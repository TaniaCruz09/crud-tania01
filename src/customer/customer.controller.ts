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
import { CustomerService } from './customer.service';
import { CreateCustomerDTO } from './dto/bookStoreCustomer.dto';

@Controller('cliente')
export class CustomerController {
  constructor(private readonly customerServiceRepo: CustomerService) {}

  @Post()
  create(@Body() customerDTO: CreateCustomerDTO) {
    return this.customerServiceRepo.create(customerDTO);
  }

  @Get()
  findAll() {
    return this.customerServiceRepo.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.customerServiceRepo.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.customerServiceRepo.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCustomerDTO: CreateCustomerDTO,
  ) {
    return this.customerServiceRepo.update(id, updateCustomerDTO);
  }
}
