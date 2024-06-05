import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Soutenance } from '../classes/soutenance';
import { Soutenance2 } from '../classes/soutenance2';
const url="http://localhost:8083/soutenances"

@Injectable({
  providedIn: 'root'
})
export class SoutenanceService {

  constructor(private http:HttpClient) { }
  getSoutenanceById(id:number):Observable<Soutenance>{
    return this.http.get<Soutenance>(url+'/'+id);
  }
  getSoutenance():Observable<Soutenance[]>{
    return this.http.get<Soutenance[]>(url);
  }
  getSoutenance2():Observable<Soutenance2[]>{
    return this.http.get<Soutenance2[]>(url);
  }
  addSoutenance(c:Soutenance):Observable<Soutenance>{
    return this.http.post<Soutenance>(url,c);
  }
  DeleteSoutenance(id:number){
    return this.http.delete(url+"/"+id);
  }
  UpdateSoutenance(m:Soutenance):Observable<Soutenance>{
    return this.http.put<Soutenance>(url+'/'+m.id,m);
  }
}
