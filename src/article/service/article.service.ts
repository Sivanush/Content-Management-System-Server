import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createArticleDto } from 'src/users/dto/create-article.dto';
import { Article } from 'src/users/model/article.model';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
  ) {}

  async createArticle(article: createArticleDto): Promise<Article> {
    const createArticle = new this.articleModel(article);
    return await createArticle.save();
  }

  async findAll(): Promise<Article[]> {
    return await this.articleModel.find().exec();
  }

  async findOne(id: string): Promise<Article> {
    return this.articleModel.findById(id).exec();
  }
}
