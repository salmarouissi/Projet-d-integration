import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/classes/etudiant';

import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-dashetudiant',
  templateUrl: './dashetudiant.component.html',
  styleUrls: ['./dashetudiant.component.css']
})
export class DashetudiantComponent implements OnInit{
  cin!:number;
  etudiant!:Etudiant;
  constructor(private etudiantService:EtudiantService,private router:Router){}
  ngOnInit(): void {
    this.cin=Number(localStorage.getItem('cin'));
    this.etudiantService.getEtudiantByCin(this.cin).subscribe(data=>{
      this.etudiant=data;
      console.log(this.etudiant)
    })

  }
  signout(){
    localStorage.removeItem('cin');
    this.router.navigate(['/home']);
  }
}
