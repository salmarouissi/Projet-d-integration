import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MembreJury } from 'src/app/classes/membre-jury';
import { MembreJuryService } from 'src/app/services/membre-jury.service';

@Component({
  selector: 'app-modifier-cinj',
  templateUrl: './modifier-cinj.component.html',
  styleUrls: ['./modifier-cinj.component.css']
})
export class ModifierCinjComponent {
  cin!: number;
  Jury!:MembreJury;
  constructor(private juryService:MembreJuryService,private router:Router) { }

  ngOnInit(): void {
    this.cin=Number(localStorage.getItem('cinjury'))
    this.juryService.getJuryByCin(this.cin).subscribe(data=>{
    this.Jury=data
    })
  }
  update(acUser:String,newUser1:String,newUser2:String){
    if(this.Jury.cin==Number(acUser) && Number(newUser1)==Number(newUser2)){
      this.Jury.cin=Number(newUser2);
      this.juryService.UpdateJury(this.Jury).subscribe(data=>{
        console.log(this.Jury)
       
        localStorage.setItem('cinjury',String(this.Jury.cin))
        console.log("update success")
        this.router.navigate(['/dashjury/profilej']);

      })
    }
  }
}
