import { IPerson } from "../class";
import { Health, IHealth } from "../health/health";
import { Move } from "../move";
import { IReclining } from "../reclining/reclining";

export interface ICheckHit {
    checkHit(player: 1 | 2): void;
}
// export interf
export class CheckHit implements ICheckHit {
    private positionBody1: IPerson;
    private positionBody2: IPerson;
    private health1: IHealth;
    private health2: IHealth;
    private reclining1:IReclining
    private reclining2:IReclining
    constructor(person1: IPerson, person2: IPerson, health1: IHealth, health2: IHealth,reclining1:IReclining,reclining2:IReclining) {
        this.positionBody1 = person1;
        this.positionBody2 = person2;
        this.health1=health1
        this.health2=health2
        this.reclining1=reclining1
        this.reclining2=reclining2
    }
     private getSideHit(playerHit: IPerson, playerGetHit: IPerson){
if(playerGetHit.positionBody.x>=playerHit.positionBody.x){
    return 'left'
}
return "right"
}
    private examinationHitHead(playerHit: IPerson, playerGetHit: IPerson){
        if (playerHit.statusHit == 0) {
            if (playerHit.positionHandLeft.x + playerHit.positionHandLeft.sizeX >= playerGetHit.positionHead.x
                && playerHit.positionHandLeft.x + playerHit.positionHandLeft.sizeX <= playerGetHit.positionHead.x + playerGetHit.positionHead.sizeX + playerHit.positionHandLeft.sizeX) {
                if (playerHit.positionHandLeft.y >= playerGetHit.positionHead.y
                    && playerHit.positionHandLeft.y <= playerGetHit.positionHead.y + playerGetHit.positionHead.sizeY + playerHit.positionHandLeft.sizeY) {
                    return true;
                }
            }
        return false;
        }}

    private findOutPlayer(player: 1 | 2): { playerHit: IPerson; playerGetHit: IPerson } {
        return player === this.positionBody2.player
            ? { playerHit: this.positionBody2, playerGetHit: this.positionBody1 }
            : { playerHit: this.positionBody1, playerGetHit: this.positionBody2 };
    }

    public checkHit(player: 1 | 2): void {
        const { playerHit, playerGetHit } = this.findOutPlayer(player);
        const isHeadHit = this.examinationHitHead(playerHit, playerGetHit);

        if (isHeadHit) {
            const side=this.getSideHit(playerHit, playerGetHit)
            playerHit.statusHit = 1;
            if (player === this.positionBody1.player) {
                
                this.health2.headHitHealth();
                this.reclining2.recliningHeadHit(side)
            }else{console.log('aaaa')
                this.health1.headHitHealth();
            }
            
        }
    }
}