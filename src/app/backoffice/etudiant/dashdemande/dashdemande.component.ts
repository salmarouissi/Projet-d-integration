import { Component, OnInit } from '@angular/core';
import { DemandeStage } from 'src/app/classes/demande-stage';
import { Etudiant } from 'src/app/classes/etudiant';
import { DemandeStageService } from 'src/app/services/demande-stage.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { StageService } from 'src/app/services/stage.service';

@Component({
  selector: 'app-dashdemande',
  templateUrl: './dashdemande.component.html',
  styleUrls: ['./dashdemande.component.css']
})
export class DashdemandeComponent implements OnInit {
  demandeStage: DemandeStage = new DemandeStage(0, new Etudiant(0, '', '', '', '', '', ''), '', '', '', '', '', new Date(), new Date(), '');
  cin!: number;
  etudiant!: Etudiant;
  constructor(private demandeStageService: DemandeStageService, private stageService: StageService,private etudiantService:EtudiantService) { }

  ngOnInit(): void {
    this.cin = Number(localStorage.getItem('cin'));
    console.log(this.cin);
    this.demandeStageService.getDemandeStage().subscribe(data => {
      console.log(data);
    });
    this.etudiantService.getEtudiantByCin(this.cin).subscribe(data=>{
     this.etudiant=data;
    })
  }

  title = 'angular-print-example';
  filename!: string;

  printElement(elementId: string) {
    const element = document.getElementById(elementId);
    const printContents = element?.innerHTML;

    if (printContents) {
      const inputs = element.querySelectorAll('input');
      let filledContents = printContents;

      // Replace input fields with their values
      inputs.forEach(input => {
        const value = input.value;
        const placeholder = input.outerHTML;
        filledContents = filledContents.replace(placeholder, value);
      });

      const printWindow = window.open('', '', 'height=600,width=800');
      if (printWindow) {
        printWindow.document.write('<html><head><title>Print</title>');
        printWindow.document.write('<style>');
        printWindow.document.write(`
          h3, h4 { text-align: center; color: blue; }
          .form-section input {
            border: none;
            border-bottom: 1px solid #000;
            width: 100%;
          }
          .form-section input[type="date"] {
            border: none;
            border-bottom: 1px solid #000;
            width: auto;
          }
          .form-section span, .form-section p {
            display: inline-block;
            width: 100%;
          }
          .separator {
            text-align: center;
            margin: 20px 0;
          }
          .text-right {
            text-align: right;
          }
        `);
        printWindow.document.write('</style></head><body>');
        printWindow.document.write('<hr><hr>');
        printWindow.document.write(filledContents);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
      }
    }
  }

  addDemande(x: string, entreprise: string, departement: string, responsable: string, type: string, finStage: any, debutStage: any, tel: string) {
    // Set its properties
    this.demandeStage.nomEntreprise = entreprise;
    this.demandeStage.dep = departement;
    this.demandeStage.responsable = responsable;
    this.demandeStage.dated = debutStage;
    this.demandeStage.datef = finStage;
    this.demandeStage.tel = tel;
    this.demandeStage.demandeurl = 'assets/' + x;
    this.demandeStage.etudiant.cin = this.cin;
    this.demandeStage.type = type;

    console.log(this.cin);
    console.log(this.demandeStage.etudiant.cin);

    // Subscribe to the service
    this.demandeStageService.addDemandeStage(this.demandeStage).subscribe(
      data => {
        console.log('added', data);
      }
    );
    this.etudiant.formulaire=true;
    this.etudiantService.UpdateEtudiant(this.etudiant).subscribe(
      data=>{
        console.log('updated');
      }
    )
  }
  
  
}
