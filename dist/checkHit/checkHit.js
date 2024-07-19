"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckHit = void 0;
class CheckHit {
    constructor(person1, person2) {
        this.positionBody1 = person1;
        this.positionBody2 = person2;
    }
    examinationHitHead(playerHit, playerGetHit) {
        if (playerHit.statusHit == 0) {
            if (playerHit.positionHandLeft.x + playerHit.positionHandLeft.sizeX >= playerGetHit.positionHead.x
                && playerHit.positionHandLeft.x + playerHit.positionHandLeft.sizeX <= playerGetHit.positionHead.x + playerGetHit.positionHead.sizeX + playerHit.positionHandLeft.sizeX) {
                if (playerHit.positionHandLeft.y >= playerGetHit.positionHead.y
                    && playerHit.positionHandLeft.y <= playerGetHit.positionHead.y + playerGetHit.positionHead.sizeY + playerHit.positionHandLeft.sizeY) {
                    console.log('aaaaaahhhhhhhhhhhha');
                }
            }
        }
    }
    findOutPlayer(player) {
        let playerHit = this.positionBody1;
        let playerGetHit = this.positionBody2;
        if (player == this.positionBody2.player) {
            playerHit = this.positionBody2;
            playerGetHit = this.positionBody1;
        }
        return {
            playerHit, playerGetHit
        };
    }
    checkHit(player) {
        const { playerHit, playerGetHit } = this.findOutPlayer(player);
        this.examinationHitHead(playerHit, playerGetHit);
    }
}
exports.CheckHit = CheckHit;
