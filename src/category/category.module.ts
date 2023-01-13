import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './category.model';
import { Product } from 'src/product/product.model';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [SequelizeModule.forFeature([Category, Product])],
})
export class CategoryModule {}
