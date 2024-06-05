import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/classes/etudiant';
import { MembreJury } from 'src/app/classes/membre-jury';
import { AuthService } from 'src/app/services/auth.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { MembreJuryService } from 'src/app/services/membre-jury.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  etudiants:Etudiant[]=[];
  jurys:MembreJury[]=[];
  constructor(private authService:AuthService, private etudiantService:EtudiantService,private juryService:MembreJuryService,private router:Router){
 
  }
  ngOnInit(): void {
    this.etudiantService.getEtudiant().subscribe(data=>{
      console.log(data);
      this.etudiants=data
    })
    this.juryService.getJury().subscribe(data=>{
      console.log(data);
      this.jurys=data;
    })
  }
  login(user:string,pass:string){
    console.log(typeof user);
    console.log(typeof pass);
    console.log(this.etudiants)
    for(let i=0;i<this.etudiants.length;i++){
      console.log(typeof this.etudiants[i].username)
      console.log(typeof this.etudiants[i].mdp)
      if(user==this.etudiants[i].username && pass==String(this.etudiants[i].mdp)){
        this.router.navigate(['/dashetudiant/dashhomeetud']);
        localStorage.setItem('cin', String(this.etudiants[i].cin) );
        break;
      }

    }
    for(let i=0;i<this.jurys.length;i++){
      if(user===this.jurys[i].username && pass===String(this.jurys[i].mdp)){
        this.router.navigate(['/dashjury'], { state: { cin: this.jurys[i].cin } });
        localStorage.setItem('cinjury', String(this.jurys[i].cin) );
        break;
      }

    }
    if(user==this.authService.validUsername && pass==this.authService.validPassword){
      this.router.navigate(['/dashadmin']);
    }
  }
}
