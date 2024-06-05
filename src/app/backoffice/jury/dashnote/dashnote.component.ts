import { Component, OnInit } from '@angular/core';
import { Soutenance } from 'src/app/classes/soutenance';
import { SoutenanceService } from 'src/app/services/soutenance.service';

@Component({
  selector: 'app-dashnote',
  templateUrl: './dashnote.component.html',
  styleUrls: ['./dashnote.component.css']
})
export class DashnoteComponent implements OnInit{
  soutenance: Soutenance[] = [];
  soutenanceJury: Soutenance[] = [];
  s!:Soutenance;
  cinjury!: number;
  nb! :number
  constructor(private soutenanceService: SoutenanceService) {}

  ngOnInit(): void {
    this.cinjury = Number(localStorage.getItem('cinjury'));
    this.soutenanceService.getSoutenance().subscribe(
      data => {
        this.soutenance = data;
        console.log(this.soutenance);
        for (let i = 0; i < this.soutenance.length; i++) {
          if (this.soutenance[i].membreJury && this.soutenance[i].membreJury.cin == this.cinjury) {
            this.soutenanceJury.push(this.soutenance[i]);
          }
        }
        console.log(this.soutenanceJury);
      }
    );
   
    
  }
update(n: string, id: number) {
  this.nb = Number(n);
  this.soutenanceService.getSoutenanceById(id).subscribe(data => {
    this.s = data;
    console.log(this.s);
    this.s.note = this.nb;
    this.soutenanceService.UpdateSoutenance(this.s).subscribe(updatedData => {
      console.log("Note added");
    });
  });
}
}
