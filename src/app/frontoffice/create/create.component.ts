import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Etudiant } from 'src/app/classes/etudiant';
import { MembreJury } from 'src/app/classes/membre-jury';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { MembreJuryService } from 'src/app/services/membre-jury.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private etudiantService: EtudiantService, private juryService: MembreJuryService,private router:Router) {}
  
  ngOnInit(): void {
    this.etudiantService.getEtudiant().subscribe(data => {
      console.log(data);
    });
  }
  
  cin!: number;
  name!: string;
  midname!: string;
  departement!: string;
  username!: string;
  mdp!: string;
  classE!: string; // Added classE field
  userType!: string;
  jury!: MembreJury;
  etudiant!: Etudiant;

  onSubmit() {
    const formValues = {
      cin: this.cin,
      name: this.name,
      midname: this.midname,
      departement: this.departement,
      username: this.username,
      mdp: this.mdp,
      classE: this.classE // Added classE field
    };
  
    if (this.userType === 'jury') {
      this.jury = new MembreJury(Number(this.cin), this.name, this.midname, this.username, this.mdp, this.departement);
  
      this.juryService.addJury(this.jury)
        .subscribe(response => {
          console.log('Jury member added successfully:', response);
          this.router.navigate(['/home']);
        }, error => {
          console.error('Error adding jury member:', error);
        });
    } else {
      this.etudiant = new Etudiant(Number(this.cin), this.name, this.midname, this.username, this.mdp, this.departement, this.classE); // Added classE field
  
      this.etudiantService.addEtudiant(this.etudiant)
        .subscribe(response => {
          console.log('etudiant added successfully:', response);
          this.router.navigate(['/home']);
        }, error => {
          console.error('Error adding etudiant:', error);
        });
    }
  
    console.log(formValues);
    console.log(this.userType);
  }
}