import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/classes/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-lister-etudiant',
  templateUrl: './lister-etudiant.component.html',
  styleUrls: ['./lister-etudiant.component.css']
})
export class ListerEtudiantComponent implements OnInit {
  etudiants: Etudiant[] = [];
  filteredTab: Etudiant[] = [];
  searchValue: string = '';

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

  supprimer(cin: number): void {
    this.etudiantService.DeleteEtudiant(Number(cin)).subscribe(
      () => {
        console.log('Etudiant supprimé');
        this.filteredTab = this.filteredTab.filter(e => e.cin !== cin);
      },
      error => {
        console.error("Erreur lors de la suppression de l'étudiant :", error);
      }
    );
  }
}