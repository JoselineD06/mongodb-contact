import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Contact } from './schemas/contact.schema';
import { CreateContactDto } from './dtos/create-contact.dto';
import { MailService } from 'src/mail/mail.service';
import { User } from 'src/user/user.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<Contact>,
    private mailService: MailService,
  ) {}

  async create(Contact: CreateContactDto, user: User) {
    const token = Math.floor(1000 + Math.random() * 9000).toString();

    await this.mailService.sendUserConfirmation(user, token);
    const createdContact = new this.contactModel(Contact);
    return createdContact.save();
  }
}
