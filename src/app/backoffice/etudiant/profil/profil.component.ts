import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/app/classes/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  cin!: number;
  Etudiant!:Etudiant;
  constructor(private etudiantService:EtudiantService) { }

  ngOnInit(): void {
    this.cin=Number(localStorage.getItem('cin'))
    this.etudiantService.getEtudiantByCin(this.cin).subscribe(data=>{
    this.Etudiant=data
    })
  }
 

}
