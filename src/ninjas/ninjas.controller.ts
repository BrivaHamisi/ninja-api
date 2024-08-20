import { Controller, Get, Param, Post, Delete, Put, Query, Body, NotFoundException, ParseEnumPipe, ParseIntPipe, ValidationPipe, UseGuards } from '@nestjs/common';
import { CreateNinjaDto} from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service'
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ninjas')
export class NinjasController {
//Initiating a constructor for the Ninja service instead of creating an instance of the service in each request
constructor(private readonly ninjasService:NinjasService){

    }
// GET /ninjas?type=fast --> []
@Get()
getNinjas(@Query('weapon') weapon: 'stars' | 'nunchunks'){
    //creating an instance of Ninja Service
    // const service = new NinjasService();
    return this.ninjasService.getNinjas(weapon);
}

// GET /ninjas/:id --> { ... }
@Get(':id')
getOneNinja(@Param('id', ParseIntPipe) id:number){
    try{
        return this.ninjasService.getNinja(id);
    }catch(err){
        throw new NotFoundException
    }
    
}
// POST /ninjas 
@Post()
@UseGuards(BeltGuard)
createNinjas(@Body(new ValidationPipe() ) createNinjaDto:CreateNinjaDto){
    return this.ninjasService.createNinjas(createNinjaDto)
}
// PUT /ninjas/:id --> { ...}
@Put(':id')
UpdateNinja(@Param('id') id:string, @Body() updateNinjaDto:UpdateNinjaDto){
    return this.ninjasService.updateNinja(+id, updateNinjaDto)
}

// DeLETE /ninjas/ :id --> []
@Delete(':id')
deleteninja(@Param('id') id:string){
    return this.ninjasService.removeNinja(+id)
}

}

