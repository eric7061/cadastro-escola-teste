import { IListItems } from './../../interface/IListItems.interface';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InputAddClassComponent } from '../../components/input-add-class/input-add-class.component';
import { IListClass } from '../../interface/IListClass.interface';
import { InputListClassComponent } from '../../components/input-list-class/input-list-class.component';
import { Observable } from 'rxjs';
import { ClassService } from '../../../../services/class.service';

@Component({
  selector: 'app-list-class',
  standalone: true,
  imports: [JsonPipe,InputAddClassComponent,InputListClassComponent,AsyncPipe],
  templateUrl: './list-class.component.html',
  styleUrl: './list-class.component.scss'
})
export class ListClassComponent implements OnInit {
  public idSchool: string = "" ;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ClassService
) { }

  public escola!: IListItems;
  public class$!: Observable<IListClass[]>;




public addClass = signal(true);



  ngOnInit(): void {
    var par = this.activatedRoute.snapshot.paramMap.get('escola');
    this.idSchool = par?? "";
    this.class$ = this.service.list(this.idSchool);


  }

  public getInputAndAddItem(value: IListClass){

  this.service.add(value).subscribe()
  console.log(value)
  window.location.reload()
}
public deletItemText(id: string){

 this.service.delete(id).subscribe()
 window.location.reload();
}


}
