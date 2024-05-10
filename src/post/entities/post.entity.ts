import { Comment } from "src/comments/entities/comment.entity";
import { UserProfile } from "src/user-profile/entities/user-profile.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string

  @Column()
  content: string

  @Column()
  category: string

  @Column()
  createdAt: Date

  @Column()
  updatedAt: Date


  @ManyToOne(() => User, (post) => post.userProfile, { cascade: true })
  @JoinColumn({ name: 'userProfileId' })
  userProfile: UserProfile[];

  @Column()
  userProfileId: number;

  @OneToMany(() => Comment, comment => comment.post, { onDelete: 'CASCADE' })
  comments: Comment[];



}
