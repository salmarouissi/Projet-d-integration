import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MembreJury } from 'src/app/classes/membre-jury';
import { MembreJuryService } from 'src/app/services/membre-jury.service';

@Component({
  selector: 'app-modifier-usernamej',
  templateUrl: './modifier-usernamej.component.html',
  styleUrls: ['./modifier-usernamej.component.css']
})
export class ModifierUsernamejComponent {
  cin!: number;
  Jury!:MembreJury;
  constructor(private juryService:MembreJuryService,private router:Router) { }

  ngOnInit(): void {
    this.cin=Number(localStorage.getItem('cinjury'))
    this.juryService.getJuryByCin(this.cin).subscribe(data=>{
    this.Jury=data
    })
  }
  update(acUser:string,newUser1:string,newUser2:string){
    if(this.Jury.username==acUser && newUser1==newUser2){
      this.Jury.username=newUser1;
      this.juryService.UpdateJury(this.Jury).subscribe(data=>{
        console.log(this.Jury)
        console.log("update success")
        this.router.navigate(['/dashjury/profilej']);
        

      })
    }
  }
}
