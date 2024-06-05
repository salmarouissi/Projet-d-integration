import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/classes/etudiant';
import { Soutenance } from 'src/app/classes/soutenance';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { SoutenanceService } from 'src/app/services/soutenance.service';

@Component({
  selector: 'app-attestation',
  templateUrl: './attestation.component.html',
  styleUrls: ['./attestation.component.css']
})
export class AttestationComponent implements OnInit {

  cin!: number;
  etudiant!: Etudiant;
  isFileSelected: boolean = false;
  fileUrl: string = ''; // This will store the relative URL of the file
  soutenances: Soutenance[] = [];

  constructor(private etudiantService: EtudiantService, private soutenanceService: SoutenanceService) { }

  ngOnInit(): void {
    this.cin = Number(localStorage.getItem('cin'));
    this.etudiantService.getEtudiantByCin(this.cin).subscribe(data => {
      this.etudiant = data;
      console.log(this.etudiant);
    });
    this.soutenanceService.getSoutenance().subscribe(data => {
      this.soutenances = data;
      console.log(this.soutenances);
    });
  }

  onFileChange(event: any): void {
    this.isFileSelected = event.target.files.length > 0;
    const file = event.target.files[0];
    if (file) {
      this.fileUrl = `assets/rapport/${file.name}`;
      console.log(this.fileUrl); // This will log the relative URL to the console
    }
  }

  onSubmitinit(): void {
    if (this.isFileSelected) {
      this.etudiant.dipot = true;
      this.etudiantService.UpdateEtudiant(this.etudiant).subscribe(response => {
        console.log('Étudiant mis à jour', response);
        alert('Rapport déposé avec succès');
      }, error => {
        console.error('Erreur lors de la mise à jour de l\'étudiant', error);
      });
    }
    for (let soutenance of this.soutenances) {
      if (soutenance.etudiant.cin === this.cin && soutenance.typeStage=='initiation')  {
        soutenance.attestationUrl = this.fileUrl;
        this.soutenanceService.UpdateSoutenance(soutenance).subscribe(data => {
          console.log(data);
          console.log('updated');
        
        });
       
      }
    }
  }
  onSubmitPerf(){
    if (this.isFileSelected) {
      this.etudiant.dipot = true;
      this.etudiantService.UpdateEtudiant(this.etudiant).subscribe(response => {
        console.log('Étudiant mis à jour', response);
        alert('Rapport déposé avec succès');
      }, error => {
        console.error('Erreur lors de la mise à jour de l\'étudiant', error);
      });
    }
    for (let soutenance of this.soutenances) {
      if (soutenance.etudiant.cin === this.cin && soutenance.typeStage=='perfectionnement')  {
        soutenance.attestationUrl = this.fileUrl;
        this.soutenanceService.UpdateSoutenance(soutenance).subscribe(data => {
          console.log(data);
          console.log('updated');
        
        });
       
      }
    }

  }
  onSubmitPfe(){
    if (this.isFileSelected) {
      this.etudiant.dipot = true;
      this.etudiantService.UpdateEtudiant(this.etudiant).subscribe(response => {
        console.log('Étudiant mis à jour', response);
        alert('Rapport déposé avec succès');
      }, error => {
        console.error('Erreur lors de la mise à jour de l\'étudiant', error);
      });
    }
    for (let soutenance of this.soutenances) {
      if (soutenance.etudiant.cin === this.cin && soutenance.typeStage=='pfe')  {
        soutenance.attestationUrl = this.fileUrl;
        this.soutenanceService.UpdateSoutenance(soutenance).subscribe(data => {
          console.log(data);
          console.log('updated');
        
        });
       
      }
    }
  }

}
