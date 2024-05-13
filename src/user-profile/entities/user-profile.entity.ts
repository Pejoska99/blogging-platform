
import { Comment } from "src/comments/entities/comment.entity";
import { Post } from "src/post/entities/post.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(() => User, (user) => user.userProfile, { cascade: true })
    @JoinColumn({name: 'userId'}) 
    user: User;

    
}
