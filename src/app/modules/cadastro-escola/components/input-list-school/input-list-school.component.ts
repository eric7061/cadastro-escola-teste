import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListItems } from '../../interface/IListItems.interface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-input-list-school',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './input-list-school.component.html',
  styleUrl: './input-list-school.component.scss'
})
export class InputListItemComponent {

constructor(
  private router: Router,
){

}

  @Input({ required: true })
  public inputListItems!: Observable<IListItems[]>;


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
