import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://monkeywit:eR9KQwYoKFTSbfc2@cluster0.zlkc2gx.mongodb.net/monkeywitdb?retryWrites=true&w=majority',
    ),
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
