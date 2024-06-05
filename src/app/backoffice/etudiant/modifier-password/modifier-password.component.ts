import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/classes/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-modifier-password',
  templateUrl: './modifier-password.component.html',
  styleUrls: ['./modifier-password.component.css']
})
export class ModifierPasswordComponent {
  cin!: number;
  Etudiant!:Etudiant;
  constructor(private etudiantService:EtudiantService,private router:Router) { }

  ngOnInit(): void {
    this.cin=Number(localStorage.getItem('cin'))
    this.etudiantService.getEtudiantByCin(this.cin).subscribe(data=>{
    this.Etudiant=data
    })
  }
  update(acUser:string,newUser1:string,newUser2:string){
    if(this.Etudiant.mdp==acUser && newUser1==newUser2){
      this.Etudiant.mdp=newUser1;
      this.etudiantService.UpdateEtudiant(this.Etudiant).subscribe(data=>{
        console.log(this.Etudiant)
        console.log("update success")
        

      })
    }
  }
}
