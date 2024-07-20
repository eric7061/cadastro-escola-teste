import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { InputAddItemComponent } from '../../components/input-add-school/input-add-school.component';
import { IListItems } from '../../interface/IListItems.interface';
import { ElocalStorage } from '../../enum/ELocalStorage.enum';
import Swal from 'sweetalert2';
import { InputListItemComponent } from '../../components/input-list-school/input-list-school.component';
import { SchoolService } from '../../../../services/school.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [InputAddItemComponent,InputListItemComponent,JsonPipe,AsyncPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit, OnDestroy {


   public escolas$!: Observable<IListItems[]>;

   constructor( private service: SchoolService){

   }
  ngOnDestroy(): void {

  }
  ngOnInit(): void {
    this.escolas$ = this.service.list();

  }

   public addItem = signal(true);


  public getInputAndAddItem(value: IListItems){
    this.service.add(value).subscribe();
    this.OnRefresh()
  }


  OnRefresh(){
    window.location.reload()
  }

  public updateItemText(newItem: {id:string, value:string}){

  }

  public deletItemText(id: string){
     this.service.delete(id).subscribe();
     this.OnRefresh()
  }

}
