import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'trunks',
    power: 10
  }];

// onDeleteId = index value : number
@Output()
public onDelete: EventEmitter<string> = new EventEmitter ();

  onDeleteCharacter(id?: string):void {
    if (!id) return;
    console.log({id})
   this.onDelete.emit(id);
  }
}
