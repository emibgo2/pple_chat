import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class User {
  @Prop({ required: true, default: new Date(), type: mongoose.Schema.Types.Date })
  createdAt: Date;

  @Prop({ required: true, default: new Date(), type: mongoose.Schema.Types.Date })
  updatedAt: Date;

  @Prop({ unique: true })
  username: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index({ username: 1 }, { unique: true });
