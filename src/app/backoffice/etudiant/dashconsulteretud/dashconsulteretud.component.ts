import { Component, OnInit } from '@angular/core';
import { Soutenance } from 'src/app/classes/soutenance';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { SoutenanceService } from 'src/app/services/soutenance.service';

@Component({
  selector: 'app-dashconsulteretud',
  templateUrl: './dashconsulteretud.component.html',
  styleUrls: ['./dashconsulteretud.component.css']
})
export class DashconsulteretudComponent implements OnInit{
  soutenance:Soutenance[]=[];
  soutenanceEtudiant:Soutenance[]=[];
  cin!:number
  constructor(private SoutenanceService:SoutenanceService){

  }
  ngOnInit(): void {
    this.cin=Number(localStorage.getItem('cin'));
    this.SoutenanceService.getSoutenance().subscribe(data=>{
      this.soutenance=data;
      for (let i = 0; i < this.soutenance.length; i++) {
        if (this.soutenance[i].etudiant && this.soutenance[i].etudiant.cin == this.cin) {
          this.soutenanceEtudiant.push(this.soutenance[i]);
        }
       
    }
    console.log(this.soutenance)
    console.log(this.soutenanceEtudiant)})
  }
}


