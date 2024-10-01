import { Component, EventEmitter, Output } from "@angular/core";
import { character } from '../../interfaces/character.interface';
import { first } from "rxjs";


@Component({
  selector: 'dbz-add-character',
  templateUrl: './add.character.component.html',
  styleUrls: ['./add.character.component.css']
})
export class addCharacterComponent {

  @Output()
  onNewCharacter:EventEmitter<character> = new EventEmitter();

  public character: character = {
    name:'',
    power: 0
  };
  emitcharacter():void{
    console.log(this.character);
    if ( this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character)

  this.character= {name:'', power: 0}
}
}
