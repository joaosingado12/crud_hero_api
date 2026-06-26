import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { UpdateSuperheroDto } from './dto/update-superhero.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SuperheroesService {
  constructor(private readonly prisma: PrismaService){}
  
  async create(createSuperheroDto: CreateSuperheroDto) {
    
    return this.prisma.superhero.create({
      data: createSuperheroDto
    })
  }

  async findAll() {
    return this.prisma.superhero.findMany()
  }

  async findOne(id: number) {
    const superhero = await this.prisma.superhero.findUnique({
      where: { id }
    })
    if(!superhero){
      throw new NotFoundException(`Super-herói com ID ${id} não encontrado.`)
    }

    return superhero
  }

  async update(id: number, updateSuperheroDto: UpdateSuperheroDto) {
    await this.findOne(id)

    return this.prisma.superhero.update({
      where: {id},
      data: UpdateSuperheroDto,
    })
  }

  async remove(id: number) {
   await this.findOne(id)

   return this.prisma.superhero.delete({
    where: { id }
   })
  }
}
