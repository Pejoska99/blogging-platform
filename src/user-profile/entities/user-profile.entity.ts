
import { Comment } from "src/comments/entities/comment.entity";
import { Post } from "src/post/entities/post.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserProfile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(() => Post, (post) => post.userProfile)
    posts: Post[];

    @OneToMany(()=> Comment, (comment) => comment.userProfile)
    comments: Comment[]
 
    
}
