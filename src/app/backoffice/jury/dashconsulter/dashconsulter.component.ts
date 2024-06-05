import { Component, OnInit } from '@angular/core';
import { MembreJury } from 'src/app/classes/membre-jury';
import { Soutenance } from 'src/app/classes/soutenance';
import { SoutenanceService } from 'src/app/services/soutenance.service';

@Component({
  selector: 'app-dashconsulter',
  templateUrl: './dashconsulter.component.html',
  styleUrls: ['./dashconsulter.component.css']
})
export class DashconsulterComponent implements OnInit {
  soutenance: Soutenance[] = [];
  soutenanceJury: Soutenance[] = [];
  cinjury!: number;

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
}
