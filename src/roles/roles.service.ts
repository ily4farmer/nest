import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './roles.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async create(createRoleDto: CreateRoleDto) {
    const createdRole = await this.roleRepository.create(createRoleDto);
    return createdRole;
  }

  async findAll(): Promise<Role[]> {
    const allRoles = await this.roleRepository.findAll();
    return allRoles;
  }

  async findOne(id: number) {
    const role = await this.roleRepository.findByPk(id);
    console.log(role);
    if (role === null) {
      throw new HttpException('not find role', HttpStatus.BAD_REQUEST);
    }
    return role;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
