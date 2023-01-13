import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/user.model';
import { UsersModule } from './users/users.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { Category } from './category/category.model';
import { Product } from './product/product.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: 'postgres',
      password: 'root',
      database: 'nest',
      models: [User, Category, Product],
      autoLoadModels: true,
      synchronize: true,
      define: {
        timestamps: false,
      },
    }),
    UsersModule,
    CategoryModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
