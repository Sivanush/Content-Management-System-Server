import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { createArticleDto } from 'src/article/dto/create-article.dto';
import { Article } from 'src/users/model/article.model';
import { ArticleService } from './article.service';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';

@UseGuards(JwtAuthGuard)
@Controller('article')
export class ArticleController {
  constructor(private readonly articlesService: ArticleService) {}

  @Post('create')
  async create(
    @Body() article: createArticleDto,
    @Req() req: Request,
  ): Promise<Article> {
    return this.articlesService.createArticle(article, req.user?.userId);
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
