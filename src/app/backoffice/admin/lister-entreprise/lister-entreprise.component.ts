import { Component, OnInit } from '@angular/core';
import { Entreprise } from 'src/app/classes/entreprise';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-lister-entreprise',
  templateUrl: './lister-entreprise.component.html',
  styleUrls: ['./lister-entreprise.component.css']
})
export class ListerEntrepriseComponent implements OnInit {
  entreprises: Entreprise[] = [];
  filteredTab: Entreprise[] = [];
  searchValue: string = '';

  constructor(private entrepriseService: EntrepriseService) {}

  ngOnInit(): void {
    this.entrepriseService.getEntreprise().subscribe(data => {
      this.entreprises = data;
      this.filteredTab = this.entreprises;
    });
  }

  onSearch(): void {
    if (this.searchValue) {
      this.filteredTab = this.entreprises.filter(entreprise =>
        entreprise.nomEntreprise.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    } else {
      this.filteredTab = this.entreprises;
    }
  }
}