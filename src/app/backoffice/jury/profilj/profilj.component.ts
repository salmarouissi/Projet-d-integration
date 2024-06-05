import { Component } from '@angular/core';
import { MembreJury } from 'src/app/classes/membre-jury';
import { MembreJuryService } from 'src/app/services/membre-jury.service';

@Component({
  selector: 'app-profilj',
  templateUrl: './profilj.component.html',
  styleUrls: ['./profilj.component.css']
})
export class ProfiljComponent {
  cin!: number;
  jury!:MembreJury;
  constructor(private juryService:MembreJuryService) { }

  ngOnInit(): void {
    this.cin=Number(localStorage.getItem('cinjury'))
    this.juryService.getJuryByCin(this.cin).subscribe(data=>{
    this.jury=data
    })
  }
}
