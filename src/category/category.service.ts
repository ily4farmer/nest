import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './category.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category) private categoryRepository: typeof Category,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = await this.categoryRepository.create(createCategoryDto);
    return category;
  }

  async findAll(): Promise<Category[]> {
    const categories = await this.categoryRepository.findAll();
    return categories;
  }

  async findOne(id: number) {
    const category = await this.categoryRepository.findByPk(id);
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const updateCategory = await this.categoryRepository.update(
      updateCategoryDto,
      {
        where: {
          name: id,
        },
      },
    );
    return updateCategory;
  }

  async remove(id: number) {
    const delCategory = await this.categoryRepository.destroy({
      where: {
        id,
      },
    });
    return delCategory;
  }
}
