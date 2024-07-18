"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealBarAndHit = exports.Hit = exports.Person = void 0;
class Person {
    constructor({ position, player, side }) {
        this.stateDoubleJump = 0;
        this.player = player;
        this.side = "right";
        this.statusHit = 0;
        this.health = 20;
        this.hit = 0;
        this.positionHead = { x: position.x + 18.5, y: position.y - 25, sizeX: 25,
            sizeY: 25 };
        this.positionLegLeft = {
            x: position.x + 35,
            y: position.y + 75,
            sizeX: 25,
            sizeY: 75,
        };
        this.positionBody = position;
        this.positionLegRight = {
            x: position.x + 3,
            y: position.y + 75,
            sizeX: 25,
            sizeY: 75,
        };
        this.positionHandLeft = {
            x: position.x,
            y: position.y + 20,
            sizeX: 90,
            sizeY: 18,
        };
        this.positionHandRight = {
            x: position.x,
            y: position.y + 38,
            sizeX: 65,
            sizeY: 18,
        };
        if (side == "left") {
            this.positionHead.x = position.x + 15.5,
                this.positionLegLeft.x = position.x + 28,
                this.positionLegRight.x = position.x - 5,
                this.positionHandLeft.x = position.x - 40,
                this.positionHandRight.x = position.x - 10;
            this.side = "left";
        }
    }
    draw(ctx) {
        ctx.fillRect(this.positionBody.x, this.positionBody.y, this.positionBody.sizeX, this.positionBody.sizeY);
        ctx.fillRect(this.positionHead.x, this.positionHead.y, this.positionHead.sizeX, this.positionHead.sizeY);
        ctx.fillRect(this.positionHandRight.x, this.positionHandRight.y, this.positionHandRight.sizeX, this.positionHandRight.sizeY);
        ctx.fillRect(this.positionHandLeft.x, this.positionHandLeft.y, this.positionHandLeft.sizeX, this.positionHandLeft.sizeY);
        ctx.fillRect(this.positionLegLeft.x, this.positionLegLeft.y, this.positionLegRight.sizeX, this.positionLegRight.sizeY);
        ctx.fillRect(this.positionLegRight.x, this.positionLegRight.y, this.positionLegLeft.sizeX, this.positionLegLeft.sizeY);
    }
}
exports.Person = Person;
class Hit {
    constructor(Position) {
        this.positionBody = Position;
    }
    HitLeftHand() {
        if (this.positionBody.hit == 0) {
            let positionAddX = -20;
            let side = "left";
            let position = 0;
            let maximum = 4;
            let positionAddY = -10;
            this.positionBody.hit += 1;
            if (this.positionBody.side == "right") {
                positionAddX = 15;
                side = "right";
            }
            const startHit = setInterval(() => {
                this.positionBody.positionHandLeft.sizeX += positionAddY * -1;
                this.positionBody.positionHandLeft.y += positionAddY;
                if (this.positionBody.side != side) {
                    side = this.positionBody.side;
                    this.positionBody.positionHandLeft.sizeX = 100;
                    this.positionBody.positionHandLeft.y =
                        this.positionBody.positionHandRight.y - 18 - 20;
                    positionAddY = 0;
                    if (side == "right") {
                        this.positionBody.positionHandLeft.x =
                            this.positionBody.positionBody.x;
                        positionAddX = 15;
                    }
                    if (side == "left") {
                        positionAddX = -20;
                        this.positionBody.positionHandLeft.x =
                            this.positionBody.positionBody.x - 40;
                    }
                    position = 0;
                    maximum = maximum / 2;
                }
                this.positionBody.positionHandLeft.x += positionAddX;
                position++;
                // 			 const res=healBarAndHit.checkHit(this.positionBody.player)
                // 			if(res&&position>0){
                // maximum=position
                // }
                if (maximum == position) {
                    position = position * -1;
                    positionAddY = 10;
                    positionAddX = positionAddX * -1;
                }
                if (0 == position) {
                    this.positionBody.statusHit = 0;
                    this.positionBody.hit = 0;
                    clearInterval(startHit);
                }
            }, 50);
        }
    }
}
exports.Hit = Hit;
class HealBarAndHit {
    constructor({ positionBody1, positionBody2 }) {
        this.positionBody1 = positionBody1;
        this.positionBody2 = positionBody2;
    }
    checkHit(player) {
        let playerHit = this.positionBody1;
        let playerGetHit = this.positionBody2;
        if (player == this.positionBody2.player) {
            playerHit = this.positionBody2;
            playerGetHit = this.positionBody1;
        }
        if (playerHit.statusHit == 0) {
            if (playerHit.positionHandLeft.x + playerHit.positionHandLeft.sizeX >= playerGetHit.positionHead.x
                && playerHit.positionHandLeft.x + playerHit.positionHandLeft.sizeX <= playerGetHit.positionHead.x + playerGetHit.positionHead.sizeX + playerHit.positionHandLeft.sizeX) {
                if (playerHit.positionHandLeft.y >= playerGetHit.positionHead.y
                    && playerHit.positionHandLeft.y <= playerGetHit.positionHead.y + playerGetHit.positionHead.sizeY + playerHit.positionHandLeft.sizeY) {
                    playerHit.statusHit = 1;
                    this.positionBody1 = playerHit;
                    this.positionBody2 = playerGetHit;
                    if (player == this.positionBody2.player) {
                        this.positionBody2 = playerHit;
                        this.positionBody1 = playerGetHit;
                    }
                    return true;
                }
            }
        }
        return false;
    }
}
exports.HealBarAndHit = HealBarAndHit;
