import { IPerson } from "../class";

export interface IHealth {
    
    headHitHealth(): void;
}

export class Health implements IHealth {
    private positionBody: IPerson;

    constructor(positionBody: IPerson) {
        this.positionBody = positionBody;
    }

    private minusHp(health: number): void {
        this.positionBody.health -= health;
    }

    public headHitHealth(): void {
        this.minusHp(3);
    }
}