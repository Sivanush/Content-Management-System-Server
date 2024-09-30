import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/module/users.module';
import { InjectConnection, MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
// import { ArticleService } from './article/service/article.service';
// import { ArticleController } from './article/controller/article.controller';
import { ArticleModule } from './article/article.module';
import { Connection } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sivanush:sivanush@ecommerce.vor4n5k.mongodb.net/CMS',
    ),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
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
