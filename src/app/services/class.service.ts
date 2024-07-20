import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IListClass } from "../modules/cadastro-escola/interface/IListClass.interface";
import { take, tap } from "rxjs";



@Injectable({
  providedIn: 'root'
})



export class ClassService{
  private readonly API = 'http://localhost:3000/'

  constructor(private http: HttpClient){

  }


  add(_class: IListClass){
    return this.http.post(`${this.API}class`,_class).pipe(take(1))
  }

  list(idSchool: string){
    return this.http
    .get<IListClass[]>(`${this.API}class?idSchool=${idSchool}`)
    .pipe(
     tap(console.log)
   );
}

delete(id: string){
  return this.http.delete(`${this.API}class/${id}`).pipe(take(1))
 }


}
