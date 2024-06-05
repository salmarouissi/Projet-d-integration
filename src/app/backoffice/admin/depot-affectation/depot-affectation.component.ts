import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/classes/etudiant';
import { Soutenance } from 'src/app/classes/soutenance';
import { Stage } from 'src/app/classes/stage';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { SoutenanceService } from 'src/app/services/soutenance.service';
import { StageService } from 'src/app/services/stage.service';

@Component({
  selector: 'app-depot-affectation',
  templateUrl: './depot-affectation.component.html',
  styleUrls: ['./depot-affectation.component.css']
})
export class DepotAffectationComponent implements OnInit {
  etudiants: Etudiant[] = [];
  filteredTab: Etudiant[] = [];
  searchValue: string = '';
  isFileSelected: boolean = false;
  fileUrl: string | null = null;
  etud!:Etudiant;


  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.etudiantService.getEtudiant().subscribe(data => {
      this.etudiants = data;
      this.filteredTab = this.etudiants;
    });

    
  }

  onSearch(): void {
    if (this.searchValue) {
      this.filteredTab = this.etudiants.filter(etudiant =>
        `${etudiant.nom} ${etudiant.prenom}`.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    } else {
      this.filteredTab = this.etudiants;
    }
  }
  
  onFileChange(event: any): void {
    this.isFileSelected = event.target.files.length > 0;
    const file = event.target.files[0];
    if (file) {
      this.fileUrl = `assets/rapport/${file.name}`;
      console.log(this.fileUrl); // This will log the relative URL to the console
    }
  }
  onSubmitPerf(cin:number){
   this.etudiantService.getEtudiantByCin(cin).subscribe(
    data=>{
       this.etud=data;
       
    }
   )
    this.etud.urlaff=String(this.fileUrl);
    this.etud.formulaire=true;
    this.etudiantService.UpdateEtudiant(this.etud).subscribe(
      data=>console.log('update success')
    )

  }
}