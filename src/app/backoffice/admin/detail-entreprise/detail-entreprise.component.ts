import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entreprise } from 'src/app/classes/entreprise';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-detail-entreprise',
  templateUrl: './detail-entreprise.component.html',
  styleUrls: ['./detail-entreprise.component.css']
})
export class DetailEntrepriseComponent implements OnInit {
  entreprise!:Entreprise
  identre!:number;
  constructor(private entrepriseService:EntrepriseService,private activatedRoute:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.identre= this.activatedRoute.snapshot.params['id'];
    console.log(this.identre)
    this.entrepriseService.getEntrepriseById(this.identre).subscribe(data=>{
      this.entreprise=data;
      console.log(this.entreprise)
      
    })
  }
  update(){
    this.entrepriseService.UpdateEntreprise(this.entreprise).subscribe(data=>{
      console.log("update avec success");
      console.log(this.entreprise)
      this.router.navigate(['dashadmin/listerEntreprise'])
    })
  }
  supprimer(){
    this.entrepriseService.DeleteEntreprise(this.identre).subscribe(data=>{
      console.log('delete avec success')
      this.router.navigate(['dashadmin/listerEntreprise'])
    })
  }
}
