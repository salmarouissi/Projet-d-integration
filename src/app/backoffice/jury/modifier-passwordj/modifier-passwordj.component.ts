import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MembreJury } from 'src/app/classes/membre-jury';
import { MembreJuryService } from 'src/app/services/membre-jury.service';

@Component({
  selector: 'app-modifier-passwordj',
  templateUrl: './modifier-passwordj.component.html',
  styleUrls: ['./modifier-passwordj.component.css']
})
export class ModifierPasswordjComponent {
  cin!: number;
  jury!:MembreJury;
  constructor(private juryService:MembreJuryService,private router:Router) { }

  ngOnInit(): void {
    this.cin=Number(localStorage.getItem('cinjury'))
    this.juryService.getJuryByCin(this.cin).subscribe(data=>{
    this.jury=data
    })
  }
  update(acUser:string,newUser1:string,newUser2:string){
    if(this.jury.mdp==acUser && newUser1==newUser2){
      this.jury.mdp=newUser1;
      this.juryService.UpdateJury(this.jury).subscribe(data=>{
        console.log(this.jury)
        console.log("update success")
        this.router.navigate(['/dashjury/profilej']);

      })
    }
  }
}
