import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Entreprise } from 'src/app/classes/entreprise';
import { Entreprise2 } from 'src/app/classes/entreprise2';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-ajout-entreprise',
  templateUrl: './ajout-entreprise.component.html',
  styleUrls: ['./ajout-entreprise.component.css']
})
export class AjoutEntrepriseComponent implements OnInit{
  entreprises:Entreprise[]=[];
  entreform!:FormGroup;
  highid!:number;

  constructor(private entrepriseService:EntrepriseService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.entrepriseService.getEntreprise().subscribe(data=>{
      this.entreprises=data
      console.log(this.entreprises);
      for(let i=0;i<this.entreprises.length;i++){
        if(this.entreprises[i].idEntreprise>this.highid){
          this.highid=this.entreprises[i].idEntreprise
        }
      }
    })
    this.entreform=this.fb.group({
      nomEntreprise:[''],
      categorie:[''],
      mail:[''],
      telephone:[''],
      imageUrl:[''],
      description:['']
    })
  }
  ajouter(){

    this.entrepriseService.addEntreprise(this.entreform.value).subscribe(
       data=>{console.log("ajout avec success");}
    )

    
  }

}
