import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListItems } from '../../interface/IListItems.interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-input-list-class',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './input-list-class.component.html',
  styleUrl: './input-list-class.component.scss'
})
export class InputListClassComponent {
  @Input({ required: true })
  public inputListItems!: Observable<IListItems[]>;


  @Output() public outputDeletItemText = new EventEmitter<string>();

  public deleteItemText(id:string){
    return this.outputDeletItemText.emit(id);
 }
}
