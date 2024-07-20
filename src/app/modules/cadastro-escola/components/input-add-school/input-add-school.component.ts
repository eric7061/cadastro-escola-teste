import { ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Input, Output, output, ViewChild, viewChild } from '@angular/core';
import { IListItems } from '../../interface/IListItems.interface';
import { AsyncPipe, JsonPipe, NgClass } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-input-add-item',
  standalone: true,
  imports: [NgClass, AsyncPipe],
  templateUrl: './input-add-school.component.html',
  styleUrl: './input-add-school.component.scss'
})
export class InputAddItemComponent {


  #cdr = inject(ChangeDetectorRef);

  @ViewChild("inputText") public inputText!: ElementRef;

  @Input({required: true}) public inputListItems! : Observable<IListItems[]>;

  @Output() public outpuListAddItem = new EventEmitter<IListItems>();


   public focusAndAddItem(value: string){
    if(value){
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = '';

       const currentDate = new Date();
       const timeStamp = currentDate.getTime();
       const id = `${timeStamp}`
       this.outpuListAddItem.emit({
        id:id,
        checked:false,
        value
       })


       return this.inputText.nativeElement.focus();
    }
   }

}
