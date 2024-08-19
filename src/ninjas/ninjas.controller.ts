import { Controller, Get, Param, Post, Delete, Put, Query, Body } from '@nestjs/common';
import { createNinjaDto} from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
// GET /ninjas?type=fast --> []

@Get()
getNinjas(@Query('type') type:string){
    return [
        type
    ];
}
// GET /ninjas/:id --> { ... }
@Get(':id')
getOneNinja(@Param('id') id:string){
    return {
        id,
    };
}
// POST /ninjas 
@Post()
createNinjas(@Body() createNinjaDto:createNinjaDto){
    return {
        name: createNinjaDto.name
    };
}
// PUT /ninjas/:id --> { ...}
@Put(':id')
UpdateNinja(@Param('id') id:string, @Body() updateNinjaDto:UpdateNinjaDto){
    return {
        id,
        name: updateNinjaDto.name,
    };
}
// DeLETE /ninjas/ :id --> []
@Delete(':id')
deleteninja(@Param('id') id:string){
    return {
        id,
    }
}

}

