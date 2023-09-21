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
import { User } from 'src/user/user.entity';
import { MailService } from 'src/mail/mail.service';

@Controller('contact')
export class ContactController {
  constructor(
    private contactService: ContactService,
    mailService: MailService,
  ) {}

  @Post()
  @UseGuards(AuthGuard('basic'))
  async create(
    @Body(new ValidationPipe()) createContact: CreateContactDto,
    user: User,
  ) {
    return this.contactService.create(createContact, user);
  }
}
