"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hit = void 0;
class Hit {
    constructor(person1, person2) {
        this.positionBody1 = person1;
        this.positionBody2 = person2;
    }
    examinationHit() {
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
    }
}
exports.Hit = Hit;
