import { Component,EventEmitter,Input, Output } from "@angular/core";
import { character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: character[]=[{
    name:'trunks',
    power:10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(id?: string):void{
    if ( !id) return;
    console.log({id})
    this.onDelete.emit(id)
  }
}
