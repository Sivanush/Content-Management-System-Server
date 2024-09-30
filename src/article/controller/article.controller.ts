import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createArticleDto } from 'src/users/dto/create-article.dto';
import { Article } from 'src/users/model/article.model';
import { ArticleService } from '../service/article.service';

@Controller('create-article')
export class ArticleController {
  constructor(private readonly articlesService: ArticleService) {}

  @Post()
  async create(@Body() article: createArticleDto): Promise<Article> {
    return this.articlesService.createArticle(article);
  }

  @Get()
  async getAll(): Promise<Article[]> {
    return this.articlesService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Article> {
    return this.articlesService.findOne(id);
  }
}
