import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MembreJury } from '../classes/membre-jury';
const url="http://localhost:8083/Jurys"
@Injectable({
  providedIn: 'root'
})
export class MembreJuryService {

  constructor(private http:HttpClient) { }
  getJuryByCin(cin:number):Observable<MembreJury>{
    return this.http.get<MembreJury>(url+'/'+cin);
  }
  getJury():Observable<MembreJury[]>{
    return this.http.get<MembreJury[]>(url);
  }
  addJury(c:MembreJury):Observable<MembreJury>{
    return this.http.post<MembreJury>(url,c);
  }
  DeleteJury(cin:number){
    return this.http.delete(url+"/"+cin);
  }
  UpdateJury(m:MembreJury):Observable<MembreJury>{
    return this.http.put<MembreJury>(url+'/'+m.cin,m);
  }
}

