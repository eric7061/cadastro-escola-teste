import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListItems } from '../../interface/IListItems.interface';

@Component({
  selector: 'app-input-list-class',
  standalone: true,
  imports: [],
  templateUrl: './input-list-class.component.html',
  styleUrl: './input-list-class.component.scss'
})
export class InputListClassComponent {
  @Input({required: true}) public inputListItems : IListItems[] = [];


  @Output() public outputDeletItemText = new EventEmitter<string>();

  public deleteItemText(id:string){
    return this.outputDeletItemText.emit(id);
 }
}
