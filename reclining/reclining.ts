import { IPerson } from "../class";

export interface IReclining{
    recliningHeadHit(side:'left'|'right'):void
}
export class Reclining{
    private positionBody: IPerson;

    constructor(positionBody: IPerson) {
        this.positionBody = positionBody;
    }
    private leftReclining(amount:number){
        this.positionBody.positionHead.x += amount;
        this.positionBody.positionLegLeft.x += amount;
        this.positionBody.positionBody.x += amount;
        this.positionBody.positionLegRight.x += amount;
        this.positionBody.positionHandLeft.x += amount;
        this.positionBody.positionHandRight.x += amount;
    }
    private rightReclining(amount:number){
        this.positionBody.positionHead.x -= amount;
        this.positionBody.positionLegLeft.x -= amount;
        this.positionBody.positionBody.x -= amount;
        this.positionBody.positionLegRight.x -= amount;
        this.positionBody.positionHandLeft.x -= amount;
        this.positionBody.positionHandRight.x -= amount;
    }
    recliningHeadHit(side:'left'|'right'){
        if('left'==side){
            this.leftReclining(10.5)
        }
        else{
this.rightReclining(10.5)
        }
    }
    
}