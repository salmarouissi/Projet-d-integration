export class Soutenance2 {
    constructor(
        public id: number,
        public date: Date,
        public salle: string,
        public cinetud: number,
        public cinjury: number,
        public note?: number,
        public typeStage?: string,
        public rapportUrl?: string,
        public attetstationUrl?: string
    ) {}
}
