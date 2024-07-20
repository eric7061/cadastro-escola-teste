import { IListItems } from './../modules/cadastro-escola/interface/IListItems.interface';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { take, tap } from "rxjs";



@Injectable({
  providedIn: 'root'
})


export class SchoolService{


     private readonly API = 'http://localhost:3000/'

     constructor(private http: HttpClient){

     }


     list(){
         return this.http
         .get<IListItems[]>(`${this.API}schools`)
         .pipe(
          tap(console.log)
        );
     }

     add(school: IListItems){
         return this.http.post(`${this.API}schools`,school).pipe(take(1))
     }

     delete(id: string){
      return this.http.delete(`${this.API}schools/${id}`).pipe(take(1))
     }

     addClass(){

     }


    }
