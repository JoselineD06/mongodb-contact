import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';

import { ContactService } from './contact.service';
import { CreateContact } from './dtos/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createContact: CreateContact) {
    return this.contactService.create(createContact);
  }
}
