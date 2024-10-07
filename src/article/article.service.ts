/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createArticleDto } from 'src/article/dto/create-article.dto';
import { Article } from 'src/users/model/article.model';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
  ) {}

  async createArticle(
    article: createArticleDto,
    userId: string,
  ): Promise<Article> {
    const author = userId;
    const createArticle = new this.articleModel({
      ...article,
      author: author,
    });
    return await createArticle.save();
  }

  async findAll(): Promise<Article[]> {
    return await this.articleModel.find().sort({ date: -1 }).exec();
  }

  async findOne(id: string): Promise<Article> {
    return this.articleModel.findById(id).exec();
  }

  async getArticlesForUser(userId: string): Promise<Article[]> {
    return await this.articleModel
      .find({ author: userId })
      .sort({ date: -1 })
      .exec();
  }

  async editArticle(
    id: string,
    articleDto: createArticleDto,
  ): Promise<Article> {
    const updatedArticle = await this.articleModel
      .findByIdAndUpdate(id, articleDto, { new: true })
      .exec();

    if (!updatedArticle) {
      throw new NotFoundException(`Article with id ${id} not found`);
    }

    return updatedArticle;
  }
}
