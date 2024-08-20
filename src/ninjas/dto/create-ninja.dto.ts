import { IsEnum, MinLength } from "class-validator";

export class CreateNinjaDto {
    @MinLength(3)
    name: string;

    @IsEnum(['stars', 'nunchunks'], {message: 'Use Correct Weapon'} )
    weapon: 'stars'| 'nunchunks'
}

