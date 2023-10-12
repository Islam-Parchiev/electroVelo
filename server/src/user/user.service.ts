import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly jwtService:JwtService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where:{
        email:createUserDto.email,
      }
    })
    if(existUser) {
      throw new BadRequestException('This user already exist!')
    }

    const user = await this.userRepository.save({
      // email:createUserDto.email,
      name:createUserDto.name,
      email:createUserDto.email,
      //  password:createUserDto.password,
      password:await argon2.hash(createUserDto.password),
    })

    const token = this.jwtService.sign({ email:createUserDto.email })

    return {user,token};
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const transaction = await this.userRepository.findOne({
      where: {id},
    })
    if(!transaction) throw new NotFoundException('Transaction not found')
  
  
    return await this.userRepository.update(id,updateUserDto); 
  }

  // findAll() {
  //   return `This action returns all user`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }


  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }

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
