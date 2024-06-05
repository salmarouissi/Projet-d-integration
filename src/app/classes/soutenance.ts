import { Etudiant } from "./etudiant";
import { MembreJury } from "./membre-jury";

export class Soutenance {
    constructor(
        public id:number,
        public date:Date,
        public salle:string,
        public etudiant:Etudiant,
        public membreJury:MembreJury,
        public note?:number,
        public typeStage?:string,
        public rapportUrl?:string,
        public attestationUrl?:string
   
    ){

    }
}
