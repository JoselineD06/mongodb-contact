import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Contact {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  correo_electronico: string;

  @Prop({ required: true })
  compania: string;

  @Prop({ required: true })
  telefono: string;

  @Prop({ required: true })
  mensaje: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
