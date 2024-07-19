import { ICheckHit } from "./checkHit/checkHit.js";
import { IPerson, Person } from "./class.js";

export interface IHit  {
	HitLeftHand() :void
  
}
export class Hit implements IHit {
    private person: IPerson;
private checkHit:ICheckHit
    constructor(person: IPerson,checkHit:ICheckHit) {
        this.person = person;
        this.checkHit=checkHit
    }

    HitLeftHand() {
        if (this.person.hit === 0) {
            let positionAddX = this.person.side === "right" ? 15 : -20;
            let side = this.person.side;
            let position = 0;
            let maximum = 4;
            let positionAddY = -10;

            this.person.hit += 1;

            const startHit = setInterval(() => {
                this.person.positionHandLeft.sizeX += positionAddY * -1;
                this.person.positionHandLeft.y += positionAddY;

                if (this.person.side !== side) {
                    side = this.person.side;
                    this.person.positionHandLeft.sizeX = 100;
                    this.person.positionHandLeft.y = this.person.positionHandRight.y - 38;

                    positionAddY = 0;
                    if (side === "right") {
                        this.person.positionHandLeft.x = this.person.positionBody.x;
                        positionAddX = 15;
                    } else {
                        positionAddX = -20;
                        this.person.positionHandLeft.x = this.person.positionBody.x - 40;
                    }

                    position = 0;
                    maximum /= 2;
                }

                this.person.positionHandLeft.x += positionAddX;
                position++;
  this.checkHit.checkHit(this.person.player)
                if (maximum === position) {
                    position *= -1;
                    positionAddY = 10;
                    positionAddX *= -1;
                }

                if (position === 0) {
                    this.person.statusHit = 0;
                    this.person.hit = 0;
                    clearInterval(startHit);
                }
            }, 50);
        }
    }}