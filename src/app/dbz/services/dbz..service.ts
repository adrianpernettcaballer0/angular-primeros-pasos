import { Injectable } from '@angular/core';
import { character } from '../interfaces/character.interface';
import { v4 as uuid }from'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characters: character[] =[{
    id: uuid(),
    name:'krilin',
    power: 1000
  },{
    id: uuid(),
    name:'Goku',
    power:9500
  },{
    id: uuid(),
    name:'Vegueta',
    power:7500
  }]

  addcharacter(character: character):void{

    const newCharacter: character={id: uuid(), ...character}
  this.characters.push(newCharacter)
  }
  // onDeleteCharacter(index:number){
   // this.characters.splice(index,1)
   deleteCharacterById(id:string){
    this.characters = this.characters.filter(characters => characters.id !== id);
   }
  }
