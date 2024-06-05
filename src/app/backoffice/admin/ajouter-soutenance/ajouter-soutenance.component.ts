import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Etudiant } from "src/app/classes/etudiant";
import { MembreJury } from "src/app/classes/membre-jury";
import { Soutenance } from "src/app/classes/soutenance";
import { EtudiantService } from "src/app/services/etudiant.service";
import { MembreJuryService } from "src/app/services/membre-jury.service";
import { SoutenanceService } from "src/app/services/soutenance.service";

@Component({
  selector: 'app-ajouter-soutenance',
  templateUrl: './ajouter-soutenance.component.html',
  styleUrls: ['./ajouter-soutenance.component.css']
})
export class AjouterSoutenanceComponent implements OnInit {
  cin!: number;
  Etudiant!: Etudiant;
  Jures!: MembreJury[];
  sou!: Soutenance;

  constructor(
    private etudiantService: EtudiantService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private serviceSoutanance: SoutenanceService,
    private jureservice: MembreJuryService
  ) {
    // Initialize the soutenance object with default Etudiant and MembreJury
    this.sou = new Soutenance(
      0,
      new Date(),
      '',
      new Etudiant(0, '', '', '', '', '', ''),
      new MembreJury(0, '', '', '', '', '')
    );
  }

  ngOnInit(): void {
    this.cin = Number(this.activateRoute.snapshot.params['id']);
    this.etudiantService.getEtudiantByCin(this.cin).subscribe(data => {
      this.Etudiant = data;
      console.log(this.Etudiant);
    });
    this.jureservice.getJury().subscribe(data => {
      this.Jures = data;
      console.log(this.Jures);
    });
  }

  ajouterS(cin: string, d: any, s: any) {
    // Ensure the soutenance object is initialized
    if (!this.sou) {
      this.sou = new Soutenance(
        0,
        new Date(),
        '',
        new Etudiant(0, '', '', '', '', '', ''),
        new MembreJury(0, '', '', '', '', '')
      );
    }

    this.sou.etudiant = this.Etudiant;
    this.sou.date = d;
    this.sou.salle = s;
    
    this.jureservice.getJuryByCin(Number(cin)).subscribe(data => {
      this.sou.membreJury = data;
      console.log(this.sou);

      this.serviceSoutanance.addSoutenance(this.sou).subscribe(() => {
        console.log("added");
      });
    });
  }
}
