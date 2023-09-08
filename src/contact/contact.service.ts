import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Contact } from './schemas/contact.schema';
import { CreateContactDto } from './dtos/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<Contact>,
  ) {}

  async create(Contact: CreateContactDto) {
    const createdContact = new this.contactModel(Contact);
    return createdContact.save();
  }
}
