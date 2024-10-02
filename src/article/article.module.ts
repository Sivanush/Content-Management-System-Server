import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleModel } from 'src/users/model/article.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleModel }]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
