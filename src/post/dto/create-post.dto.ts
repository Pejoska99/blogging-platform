import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePostDto {

    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly category: string;

    @IsNotEmpty()
    @IsString()
    readonly content: string;

    @IsNotEmpty()
    @IsDate()
    readonly createdAt:Date ;

    @IsNotEmpty()
    @IsDate()
    readonly updatedAt:Date ;

   
    

    


}
