import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { InjectConnection, MongooseModule } from '@nestjs/mongoose';
// import { ArticleService } from './article/service/article.service';
// import { ArticleController } from './article/controller/article.controller';
import { ArticleModule } from './article/article.module';
import { Connection } from 'mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UsersModule,
    ArticleModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  onModuleInit() {
    this.connection.once('connected', () => {
      console.log('Successfully connected to MongoDB');
    });
  }
}
