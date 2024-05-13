import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
import { UserProfile } from './entities/user-profile.entity';

@Controller('user-profile')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}


  @Get()
  findAll(): Promise<UserProfile[]> {
    return this.userProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserProfile> {
    return this.userProfileService.findOne(+id);
  }

  @Post()
  create(@Body() createUserProfileDto: CreateUserProfileDto): Promise<UserProfile> {
    return this.userProfileService.create(createUserProfileDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserProfileDto: UpdateUserProfileDto): Promise<UserProfile> {
    return this.userProfileService.update(+id, updateUserProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userProfileService.remove(+id);
  }
}
