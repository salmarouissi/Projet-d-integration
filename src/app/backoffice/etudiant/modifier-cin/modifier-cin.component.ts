import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/classes/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-modifier-cin',
  templateUrl: './modifier-cin.component.html',
  styleUrls: ['./modifier-cin.component.css']
})
export class ModifierCinComponent {
  cin!: number;
  Etudiant!:Etudiant;
  constructor(private etudiantService:EtudiantService,private router:Router) { }

  ngOnInit(): void {
    this.cin=Number(localStorage.getItem('cin'))
    this.etudiantService.getEtudiantByCin(this.cin).subscribe(data=>{
    this.Etudiant=data
    })
  }
  update(acUser:String,newUser1:String,newUser2:String){
    if(this.Etudiant.cin==Number(acUser) && Number(newUser1)==Number(newUser2)){
      this.Etudiant.cin=Number(newUser2);
      this.etudiantService.UpdateEtudiant(this.Etudiant).subscribe(data=>{
        console.log(this.Etudiant)
       
        localStorage.setItem('cin',String(this.Etudiant.cin))
        console.log("update success")
        

      })
    }
  }
}

