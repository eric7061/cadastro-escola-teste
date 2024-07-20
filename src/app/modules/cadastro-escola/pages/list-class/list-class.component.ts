import { JsonPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InputAddClassComponent } from '../../components/input-add-class/input-add-class.component';
import { ElocalStorage } from '../../enum/ELocalStorage.enum';
import { IListClass } from '../../interface/IListClass.interface';
import { InputListClassComponent } from '../../components/input-list-class/input-list-class.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-class',
  standalone: true,
  imports: [JsonPipe,InputAddClassComponent,InputListClassComponent],
  templateUrl: './list-class.component.html',
  styleUrl: './list-class.component.scss'
})
export class ListClassComponent implements OnInit {
  public idSchool: string = "" ;
  constructor(
    private activatedRoute: ActivatedRoute
) { }


#setListItems = signal<IListClass[]>(this.#parsItems());

#updateLocalStorage(){
  return localStorage.setItem(ElocalStorage.MY_LIST_CLASS,JSON.stringify(this.#setListItems()))
}
public getListItems = this.#setListItems.asReadonly();
public addClass = signal(true);

#parsItems(){
 return JSON.parse(localStorage.getItem(ElocalStorage.MY_LIST_CLASS) || '[]')
}



  ngOnInit(): void {
    var par = this.activatedRoute.snapshot.paramMap.get('escola');
    this.idSchool = par?? "";

  }

  public getInputAndAddItem(value: IListClass){
    localStorage.setItem(
    ElocalStorage.MY_LIST_CLASS, JSON.stringify([...this.#setListItems(),value])

  );
  window.location.reload()
  return this.carregaEscola();

}
public deletItemText(id: string){
  console.log(id)
  this.#setListItems.update((oldValue: IListClass[]) => {
    return oldValue.filter((res) => {

    });
  })

  return this.#updateLocalStorage

}

  public carregaEscola(){
    return this.getListItems().filter((res: IListClass) => {
      if(res.idSchool === this.idSchool){
        return res
      }

      return ""
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
        localStorage.removeItem(ElocalStorage.MY_LIST_CLASS);
        return this.#setListItems.set(this.#parsItems());
      }
    });


  }


}
