import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../classes/etudiant';
const url="http://localhost:8083/etudiants"
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  
  constructor(private http:HttpClient) { }
  getEtudiantByCin(cin:number):Observable<Etudiant>{
    return this.http.get<Etudiant>(url+'/'+cin);
  }
  getEtudiant():Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(url);
  }
  addEtudiant(c:Etudiant):Observable<Etudiant>{
    return this.http.post<Etudiant>(url,c);
  }
  DeleteEtudiant(cin:number){
    return this.http.delete(url+"/"+cin);
  }
  UpdateEtudiant(c:Etudiant):Observable<Etudiant>{
    return this.http.put<Etudiant>(url+'/'+c.cin,c);
  }
}
