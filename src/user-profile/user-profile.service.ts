import { Injectable } from '@nestjs/common';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserProfile } from './entities/user-profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserProfileService {
  constructor(
    @InjectRepository(UserProfile)
    private userProfileRepository: Repository<UserProfile>
  ){}

  async findAll(): Promise<UserProfile[]> {
    return this.userProfileRepository.find({
      relations: { comments: true, posts:true}
    }
    )
  }

  async findOne(id: number):Promise<UserProfile>{
    return this.userProfileRepository.findOne({ 
      where: { id }, 
      

     })
  }

  async create(CreateUserProfileDto: CreateUserProfileDto):Promise<UserProfile> {
    const userProfile = this.userProfileRepository.create(CreateUserProfileDto)
    await this.userProfileRepository.save(userProfile)
    return userProfile
  }

  async update(id: number, UpdateUserProfileDto: UpdateUserProfileDto):Promise<UserProfile> {
    let userProfile = await this.userProfileRepository.findOneBy({ id });
    userProfile = this.userProfileRepository.merge(userProfile, UpdateUserProfileDto)
    await this.userProfileRepository.save(userProfile)
    return userProfile;
  }
  async remove(id: number) : Promise<void>{
    await this.userProfileRepository.delete( id )
  }
}
