import { IPerson } from "../class";

export class Health{
    private positionBody: IPerson;

    constructor(positionBody: IPerson) {
        this.positionBody = positionBody;
    }
    private minusHp(health:number){
        this.positionBody.health=this.positionBody.health-health
    }
    headHitHealth(){
        this.minusHp(3)
    }
}