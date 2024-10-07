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
    console.log(article);
    console.log(req.user?.userId);
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

  @Get('profile/list')
  async getArticleForProfile(@Req() req: Request): Promise<Article[]> {
    console.log(req.user?.userId);
    const a = await this.articlesService.getArticlesForUser(req.user?.userId);
    console.log(a);
    return a;
  }

  @Post(':id')
  async editArticle(
    @Param('id') id: string, // Extract the article id from the route parameters
    @Body() article: createArticleDto, // Article data from the request body
  ): Promise<Article> {
    console.log(article);
    return this.articlesService.editArticle(id, article); // Pass both id and articleDto
  }
}
