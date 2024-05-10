import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>
  ){}

  async findAll(): Promise<Post[]> {
    return this.postRepository.find({
      relations: {userProfile: true, comments: true }
    })
  }

  async findOne(id: number): Promise<Post> {
    return this.postRepository.findOne({
      where: { id },
      relations: { userProfile: true}
    })
  }


  


  async create(CreatePostDto: CreatePostDto): Promise<Post> {
   const post = this.postRepository.create(CreatePostDto)
   await this.postRepository.save(post)
   return post;
  }


  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    let post = await this.postRepository.findOneBy({ id });
    post = this.postRepository.merge(post, updatePostDto)
    await this.postRepository.save(post)
    return post;
  }

  async remove(id: number):Promise<void> {
    await this.postRepository.delete(id);
}
}

