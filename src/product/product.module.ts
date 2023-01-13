import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './product.model';
import { Category } from 'src/category/category.model';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [SequelizeModule.forFeature([Product, Category])],
})
export class ProductModule {}
