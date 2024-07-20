import { Component, signal } from '@angular/core';
import { InputAddItemComponent } from '../../components/input-add-school/input-add-school.component';
import { IListItems } from '../../interface/IListItems.interface';
import { ElocalStorage } from '../../enum/ELocalStorage.enum';
import Swal from 'sweetalert2';
import { InputListItemComponent } from '../../components/input-list-school/input-list-school.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [InputAddItemComponent,InputListItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

   public addItem = signal(true);

   #setListItems = signal<IListItems[]>(this.#parsItems());

   public getListItems = this.#setListItems.asReadonly();

  #parsItems(){
    return JSON.parse(localStorage.getItem('@my-list') || '[]')
  }

  #updateLocalStorage(){
     return localStorage.setItem(ElocalStorage.MY_LIST,JSON.stringify(this.#setListItems()))
  }

  public getInputAndAddItem(value: IListItems){
    console.log(value);

   localStorage.setItem(
    ElocalStorage.MY_LIST, JSON.stringify([...this.#setListItems(),value])
  );

  return this.#setListItems.set(this.#parsItems());
  }
  public listItemStage(){
    return this.getListItems().filter((res: IListItems) => {

      return res
    })
  }

  public deleteAllItems(){

    Swal.fire({
      title: "Tem certeza",
      text: "Você não podera reverter isso!",
      icon: "warning",
      showCancelButton: true,

      confirmButtonText: "Sim, delete tudo!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem(ElocalStorage.MY_LIST);
        localStorage.removeItem(ElocalStorage.MY_LIST_CLASS);
    return this.#setListItems.set(this.#parsItems());
      }
    });


  }

  public updateItemCheckbox(newItem: {id:string,checked:boolean}){
      this.#setListItems.update((oldValue: IListItems[]) => {
        oldValue.filter(res => {
          if(res.id == newItem.id){
            res.checked = newItem.checked;
            return res;
          }
          return res;
        });
        return oldValue;
     });

     return this.#updateLocalStorage
  }

  public updateItemText(newItem: {id:string, value:string}){
    this.#setListItems.update((oldValue: IListItems[]) => {
      oldValue.filter(res => {
        if(res.id == newItem.id){
          res.value = newItem.value;
          return res;
        }
        return res;
      });
      return oldValue;
   });

     return this.#updateLocalStorage
  }

  public deletItemText(id: string){
    this.#setListItems.update((oldValue: IListItems[]) => {
      return oldValue.filter((res) => res.id !== id);
    })

    return this.#updateLocalStorage

  }

}
