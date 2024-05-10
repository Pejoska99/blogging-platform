import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserProfileDto {
    @IsNotEmpty()
    @IsString()
    readonly firstName: string;

    @IsNotEmpty()
    @IsString()
    readonly lastName: string;

    @IsNotEmpty()
    @IsNumber()
    age: number
}
