import { IPerson } from "../class";

export interface IReclining{
    recliningHeadHit():void
}
export class Reclining{
    private positionBody: IPerson;

    constructor(positionBody: IPerson) {
        this.positionBody = positionBody;
    }
    recliningHeadHit(){
        if (this.positionBody.side == "left") {
            this.positionBody.positionHead.x =this.positionBody.positionHead.x + 10.5
}
    }
    
}