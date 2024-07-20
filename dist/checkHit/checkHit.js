"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckHit = void 0;
// export interf
class CheckHit {
    constructor(person1, person2, health1, health2, reclining1, reclining2) {
        this.positionBody1 = person1;
        this.positionBody2 = person2;
        this.health1 = health1;
        this.health2 = health2;
        this.reclining1 = reclining1;
        this.reclining2 = reclining2;
    }
    getSideHit(playerHit, playerGetHit) {
        if (playerGetHit.positionBody.x >= playerHit.positionBody.x) {
            return 'left';
        }
        return "right";
    }
    examinationHitHead(playerHit, playerGetHit) {
        if (playerHit.statusHit == 0) {
            if (playerHit.positionHandLeft.x + playerHit.positionHandLeft.sizeX >= playerGetHit.positionHead.x
                && playerHit.positionHandLeft.x + playerHit.positionHandLeft.sizeX <= playerGetHit.positionHead.x + playerGetHit.positionHead.sizeX + playerHit.positionHandLeft.sizeX) {
                if (playerHit.positionHandLeft.y >= playerGetHit.positionHead.y
                    && playerHit.positionHandLeft.y <= playerGetHit.positionHead.y + playerGetHit.positionHead.sizeY + playerHit.positionHandLeft.sizeY) {
                    return true;
                }
            }
            return false;
        }
    }
    findOutPlayer(player) {
        return player === this.positionBody2.player
            ? { playerHit: this.positionBody2, playerGetHit: this.positionBody1 }
            : { playerHit: this.positionBody1, playerGetHit: this.positionBody2 };
    }
    checkHit(player) {
        const { playerHit, playerGetHit } = this.findOutPlayer(player);
        const isHeadHit = this.examinationHitHead(playerHit, playerGetHit);
        if (isHeadHit) {
            const side = this.getSideHit(playerHit, playerGetHit);
            playerHit.statusHit = 1;
            if (player === this.positionBody1.player) {
                this.health2.headHitHealth();
                this.reclining2.recliningHeadHit();
            }
            else {
                this.health1.headHitHealth();
            }
        }
    }
}
exports.CheckHit = CheckHit;
