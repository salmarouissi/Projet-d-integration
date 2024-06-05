import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MembreJury } from 'src/app/classes/membre-jury';
import { MembreJuryService } from 'src/app/services/membre-jury.service';

@Component({
  selector: 'app-dashhome',
  templateUrl: './dashhome.component.html',
  styleUrls: ['./dashhome.component.css']
})
export class DashhomeComponent {
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
}
