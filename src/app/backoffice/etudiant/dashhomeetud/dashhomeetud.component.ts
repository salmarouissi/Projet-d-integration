import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entreprise } from 'src/app/classes/entreprise';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-dashhomeetud',
  templateUrl: './dashhomeetud.component.html',
  styleUrls: ['./dashhomeetud.component.css']
})
export class DashhomeetudComponent implements OnInit{
  entreprises: Entreprise[] = [];
 

  constructor(
    private entrepriseService: EntrepriseService,

  ) {}

  ngOnInit(): void {
 

    this.entrepriseService.getEntreprise().subscribe(data => {
      this.entreprises = data;
      console.log(this.entreprises);
    });

  }
}
