import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Contact, ContactSchema } from './schemas/contact.schema';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [
    MailModule,
    MongooseModule.forFeature([
      {
        name: Contact.name,
        schema: ContactSchema,
      },
    ]),
  ],
  providers: [ContactService],
  controllers: [ContactController],
})
export class ContactModule {}
