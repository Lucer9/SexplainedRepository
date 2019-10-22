export class Usuario {
    constructor(
        public id?: int,
        public mail?: string,
        public password?: string,
        public boughtModules?: int[],
        public cart?: int[]
    ){}
}