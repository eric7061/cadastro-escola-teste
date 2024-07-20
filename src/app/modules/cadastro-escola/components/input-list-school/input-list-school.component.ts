import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListItems } from '../../interface/IListItems.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-list-school',
  standalone: true,
  imports: [],
  templateUrl: './input-list-school.component.html',
  styleUrl: './input-list-school.component.scss'
})
export class InputListItemComponent {

constructor(
  private router: Router,
){

}

  @Input({required: true}) public inputListItems : IListItems[] = [];

  @Output() public outputUpdateItemCheckbox = new EventEmitter<{id:string, checked:boolean}>();

  public updateItemCheckbox(id:string,checked:boolean){
     return this.outputUpdateItemCheckbox.emit({id,checked});
  }


  @Output() public outputUpdateItemText = new EventEmitter<{id:string, value:string}>();

  public updateItemText(id:string,value:string){
     return this.outputUpdateItemText.emit({id,value});
  }

  @Output() public outputDeletItemText = new EventEmitter<string>();

  public deleteItemText(id:string){
     return this.outputDeletItemText.emit(id);
  }

  goToLogin(id:string) {
    this.router.navigate(['/class',id]);
}
}
