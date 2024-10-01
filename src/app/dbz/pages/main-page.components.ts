import { Component, Input, } from '@angular/core';
import { character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz..service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.components.html'
})

export class MainPageComponent {

  constructor( private DbzService: DbzService){}

    get character(): character[]{
      return [...this.DbzService.characters]
    }

    onDeleteCharacter(id: string):void{
      this.DbzService.deleteCharacterById(id);
    }
     onNewCharacter (character: character ):void{
      this.DbzService.addcharacter(character)
     }
    }


