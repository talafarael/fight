import { IPerson } from "../class";

export interface IReclining{
    recliningHeadHit():void
}
export class Reclining{
    private positionBody: IPerson;

    constructor(positionBody: IPerson) {
        this.positionBody = positionBody;
    }
    private left(){
        this.positionBody.positionHead.x =this.positionBody.positionHead.x + 10.5
    }
    recliningHeadHit(side:'left'|'right'){
        if('left'==side){
            this.left()
        }
    }
    
}