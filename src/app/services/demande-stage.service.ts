import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeStage } from '../classes/demande-stage';
const url="http://localhost:8083/Demandestage"
@Injectable({
  providedIn: 'root'
})
export class DemandeStageService {

  constructor(private http:HttpClient) { }
  getDemandeStageById(id:number):Observable<DemandeStage>{
    return this.http.get<DemandeStage>(url+'/'+id);
  }
  getDemandeStage():Observable<DemandeStage[]>{
    return this.http.get<DemandeStage[]>(url);
  }
  addDemandeStage(c:DemandeStage):Observable<DemandeStage>{
    return this.http.post<DemandeStage>(url,c);
  }
  DeleteDemandeStage(id:number){
    return this.http.delete(url+"/"+id);
  }
  UpdateDemandeStage(c:DemandeStage):Observable<DemandeStage>{
    return this.http.put<DemandeStage>(url+'/'+c.idDemande,c);
  }
}
