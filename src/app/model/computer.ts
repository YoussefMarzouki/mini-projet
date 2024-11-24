import { Comment } from "./comment";

export class Computer {
    constructor(
        public id:string,
        public name: string,
        public photo:string,
        public price: number,
        public availability:boolean,
        public date:Date,
        public categ:string,
        public comments:Comment[]
    ){}
}
