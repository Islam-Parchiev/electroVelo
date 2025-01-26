import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly jwtService:JwtService
  ) {}

  private prisma = new PrismaClient();


  async create(createUserDto: CreateUserDto) {
    const existUser = await this.prisma.user.findFirst({
      where:{
        email:createUserDto.email
      }
    })
    console.log("serUs32",existUser);
    if(existUser!==null) {
      throw new BadRequestException('This user already exist!')
    }

    const user = await this.prisma.user.create({
      data:{
      name:createUserDto.name,
      email:createUserDto.email,
      password:await argon2.hash(createUserDto.password),
      }
    })

    const token = this.jwtService.sign({ email:createUserDto.email })

    return {user,token};
  }




  async update(id: number, updateUserDto: UpdateUserDto) {
    const transaction = await this.prisma.user.findUnique({
      where:{id:id}
    })
    if(!transaction) throw new NotFoundException('Transaction not found')
  
    return await this.prisma.user.update({where:{id},data:{...updateUserDto}})
  }


   findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email });
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
