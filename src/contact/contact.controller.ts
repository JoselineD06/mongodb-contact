import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';

import { ContactService } from './contact.service';
import { CreateContactDto } from './dtos/create-contact.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  @UseGuards(AuthGuard('basic'))
  async create(@Body(new ValidationPipe()) createContact: CreateContactDto) {
    return this.contactService.create(createContact);
  }
}
