export class Etudiant {
    constructor(
        public cin:number,
        public nom:String,
        public prenom:String,
        public username:String,
        public mdp:String,
        public departement:String,
        public classE:string,
        public dipot?:boolean,
        public formulaire?:boolean,
        public urlaff?:string

    ){

    }
}
