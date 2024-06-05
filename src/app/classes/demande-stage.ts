import { Etudiant } from "./etudiant";

export class DemandeStage {
    constructor(
        public idDemande:number,
        public etudiant:Etudiant,
        public demandeurl:string,
        public nomEntreprise:string,
        public dep:string,
        public responsable:string,
        public type:string,
        public dated:Date,
        public datef:Date,
        public tel:string
        
        
    ){

    }
}

