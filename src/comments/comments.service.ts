import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
constructor(
@InjectRepository(Comment)
private commentRepository: Repository<Comment>){}

  
  async findAll():Promise<Comment[]> {
    return this.commentRepository.find({
      relations: {post: true, userProfile: true}
    })
  }

  async findOne(id: number):Promise<Comment> {
    return this.commentRepository.findOne({
      where: { id },
      relations: { post: true, userProfile: true}
    })
  }

  async create(createCommentDto: CreateCommentDto):Promise<Comment> {
    const comment = this.commentRepository.create(createCommentDto)
    await this.commentRepository.save(comment)
    return comment;
   }
 
 

  async update(id: number, updateCommentDto: UpdateCommentDto):Promise<Comment> {
    let comment = await this.commentRepository.findOneBy({ id });
    comment = this.commentRepository.merge(comment, updateCommentDto)
    await this.commentRepository.save(comment)
    return comment;
  }
  async remove(id: number):Promise<void> {
   await this.commentRepository.delete(id)
  }
}
