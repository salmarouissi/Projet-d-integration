import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stage } from '../classes/stage';
const url="http://localhost:8083/stages"
@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor(private http:HttpClient) { }
  getStageById(id:number):Observable<Stage>{
    return this.http.get<Stage>(url+'/'+id);
  }
  getStage():Observable<Stage[]>{
    return this.http.get<Stage[]>(url);
  }
  addStage(c:Stage):Observable<Stage>{
    return this.http.post<Stage>(url,c);
  }
  DeleteStage(id:number){
    return this.http.delete(url+"/"+id);
  }
  UpdateStage(m:Stage):Observable<Stage>{
    return this.http.put<Stage>(url+'/'+m.idStage,m);
  }

}
