import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Article extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, type: [{ type: Object }] })
  content: {
    type: string;
    content: string;
  };

  @Prop({ default: Date.now() })
  date: Date;

  @Prop({ default: Date.now() })
  updatedAt: Date;

  @Prop({ required: true })
  author: string;

  @Prop({ default: true })
  isListed: boolean;

  @Prop({ required: true })
  tags: string[];
}

export const ArticleModel = SchemaFactory.createForClass(Article);
