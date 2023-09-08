import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';

import { ContactService } from './contact.service';
import { CreateContactDto } from './dtos/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createContact: CreateContactDto) {
    return this.contactService.create(createContact);
  }
}
