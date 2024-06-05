import { Component, OnInit } from '@angular/core';
import { MembreJury } from 'src/app/classes/membre-jury';
import { MembreJuryService } from 'src/app/services/membre-jury.service';

@Component({
  selector: 'app-lister-jury',
  templateUrl: './lister-jury.component.html',
  styleUrls: ['./lister-jury.component.css']
})
export class ListerJuryComponent implements OnInit {
  Jury: MembreJury[] = [];
  filteredTab: MembreJury[] = [];
  searchValue: string = '';

  constructor(private juryService: MembreJuryService) {}

  ngOnInit(): void {
    this.juryService.getJury().subscribe(data => {
      this.Jury = data;
      this.filteredTab = this.Jury;
    });
  }

  onSearch(): void {
    if (this.searchValue) {
      this.filteredTab = this.Jury.filter(jury =>
        `${jury.nom} ${jury.prenom}`.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    } else {
      this.filteredTab = this.Jury;
    }
  }

  supprimer(cin: number): void {
    this.juryService.DeleteJury(Number(cin)).subscribe(
      () => {
        console.log('Jury supprimé');
        this.filteredTab = this.filteredTab.filter(e => e.cin !== cin);
      },
      error => {
        console.error("Erreur lors de la suppression du membre du jury :", error);
      }
    );
  }
}