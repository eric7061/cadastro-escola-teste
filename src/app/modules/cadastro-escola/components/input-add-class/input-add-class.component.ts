import { ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Input, Output, signal, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { IListClass } from '../../interface/IListClass.interface';
import { ElocalStorage } from '../../enum/ELocalStorage.enum';

@Component({
  selector: 'app-input-add-class',
  standalone: true,
  imports: [NgClass],
  templateUrl: './input-add-class.component.html',
  styleUrl: './input-add-class.component.scss'
})


export class InputAddClassComponent {
  #setListItems = signal<IListClass[]>(this.#parsItems());

   public getListItems = this.#setListItems.asReadonly();

  #parsItems(){
    return JSON.parse(localStorage.getItem(ElocalStorage.MY_LIST_CLASS) || '[]')
  }

  #cdr = inject(ChangeDetectorRef);

  @ViewChild("inputText") public inputText!: ElementRef;

  @Input({required: true}) public inputListItems : IListClass[] = [];

  @Input({required: true}) public idSchool : string = "";

  @Output() public outpuListAddItem = new EventEmitter<IListClass>();

  public focusAndAddClass(value: string){
    console.log(value);
    if(value){
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = '';

       const currentDate = new Date();
       const timeStamp = currentDate.getTime();
       const id = `${timeStamp}`
       this.outpuListAddItem.emit({
        id,
        idSchool:this.idSchool,
        checked:false,
        value
       })
       return this.inputText.nativeElement.focus();
    }
   }
}
