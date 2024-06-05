import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entreprise } from '../classes/entreprise';
const url="http://localhost:8083/entreprises"
@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http:HttpClient) { }
  getEntrepriseById(id:number):Observable<Entreprise>{
    return this.http.get<Entreprise>(url+'/'+id);
  }
  getEntreprise():Observable<Entreprise[]>{
    return this.http.get<Entreprise[]>(url);
  }
  addEntreprise(c:Entreprise):Observable<Entreprise>{
    return this.http.post<Entreprise>(url,c);
  }
  DeleteEntreprise(id:number){
    return this.http.delete(url+"/"+id);
  }
  UpdateEntreprise(c:Entreprise):Observable<Entreprise>{
    return this.http.put<Entreprise>(url+'/'+c.idEntreprise,c);
  }
}
