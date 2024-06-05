import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembreJury } from 'src/app/classes/membre-jury';
import { MembreJuryService } from 'src/app/services/membre-jury.service';

@Component({
  selector: 'app-dash-jury',
  templateUrl: './dash-jury.component.html',
  styleUrls: ['./dash-jury.component.css']
})
export class DashJuryComponent implements OnInit {
  cin!:number;
  Jury!:MembreJury;
  constructor(private juryService:MembreJuryService,private router:Router){}
  ngOnInit(): void {
    this.cin=Number(localStorage.getItem('cinjury'));
    this.juryService.getJuryByCin(this.cin).subscribe(data=>{
      this.Jury=data;
      console.log(this.Jury)
    })

  }
  signout(){
    localStorage.removeItem('cinjury');
    this.router.navigate(['/home']);
  }
}
