import { Injectable } from '@nestjs/common';
import { CreateNinjaDto} from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
    // Conatains the logic of our project | Contains the einjectable decorators
    private ninjas = [
        {id:0, name: 'ninjaA', weapon:'stars'},
        {id:1, name: 'ninjaB', weapon:'nunchunks'},
    ]

//method that returns the colection of Ninjas above
getNinjas(weapon?: 'stars'| 'nunchunks'){
    if (weapon){
        return this.ninjas.filter((ninja) => ninja.weapon ===weapon);
    }

    return this.ninjas
}

getNinja(id:number){
    const ninja = this.ninjas.find((ninja) => ninja.id === id);

    if(!ninja){
        throw new Error('Ninja not found!');
    }
    return ninja;
}

createNinjas(createNinjaDto:CreateNinjaDto){
    const newNinja = {
        ...createNinjaDto,
        id: Date.now(),
    }
    this.ninjas.push(newNinja)

    return newNinja;
}

updateNinja(id: number, updateNinjaDto:UpdateNinjaDto){
    this.ninjas = this.ninjas.map((ninja) =>{
        if(ninja.id == id){
            return { ...ninja, ...updateNinjaDto}
        }
    })
}

removeNinja(id:number){
    const toBeRemoved = this.getNinja(id);

    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);

    return toBeRemoved;
}

}
