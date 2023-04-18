import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/bookStoreCustomer.entity';
import { CreateCustomerDTO } from './dto/bookStoreCustomer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(customerDTO: CreateCustomerDTO) {
    const customer = this.customerRepository.create(customerDTO);
    await this.customerRepository.save(customer);

    return customer;
  }

  findAll() {
    return this.customerRepository.find();
  }

  findOne(customerID: string) {
    return this.customerRepository.findOneBy({ customerID });
  }

  async remove(customerID: string) {
    const customer = await this.findOne(customerID);
    await this.customerRepository.remove(customer);
    return 'Cliente eliminado satisfactoriamente';
  }

  async update(customerID: string, cambios: CreateCustomerDTO) {
    const findCustomer = await this.findOne(customerID);
    const updatedCustomer = await this.customerRepository.merge(
      findCustomer,
      cambios,
    );
    return this.customerRepository.save(updatedCustomer);
  }
}
