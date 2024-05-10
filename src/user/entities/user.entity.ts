import { UserProfile } from "src/user-profile/entities/user-profile.entity";
import { Role } from "src/util/role.enum";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        unique:true,
    })
    email:string;

    @Column()
    password:string;

    @Column({
        type: 'enum',
        enum: Role,
    })
    role: Role

    @OneToOne(() => UserProfile)
    @JoinColumn() 
    userProfile: UserProfile;

    
}
