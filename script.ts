
import { HealBarAndHit, Hit, Move, Person } from "./class.js";
import { IClassInheritance, IConstructor, IInheritance, IPosition, IPressedKeys } from "./type.js";

const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement; 
const ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

let pressedKeys: IPressedKeys = {}; // Define pressedKeys here

ctx.fillStyle = "green";
canvas.width = 800;
canvas.height = 600;
let jump = "";
let arr: IPosition = { y: 300, x: 25, sizeX: 55, sizeY: 75 };
let arry: IPosition = { y: 300, x: 325, sizeX: 55, sizeY: 75 };
const person = new Person({ position: arr, player: 1, side: "right" });
const move = new Move(person);
const hit = new Hit(person);
const person1 = new Person({ position: arry, player: 2, side: "left" });
const move1 = new Move(person1);
const hit1 = new Hit(person1);
const healBarAndHit = new HealBarAndHit({ positionBody1: person, positionBody2: person1 });
draw({ position: move.positionBody, position1: move1.positionBody });

function draw({ position, position1 }: { position: IClassInheritance; position1: IClassInheritance }) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(position.positionBody.x, position.positionBody.y, position.positionBody.sizeX, position.positionBody.sizeY);
    ctx.fillRect(position.positionHead.x, position.positionHead.y, position.positionHead.sizeX, position.positionHead.sizeY);
    ctx.fillRect(position.positionHandRight.x, position.positionHandRight.y, position.positionHandRight.sizeX, position.positionHandRight.sizeY);
    ctx.fillRect(position.positionHandLeft.x, position.positionHandLeft.y, position.positionHandLeft.sizeX, position.positionHandLeft.sizeY);
    ctx.fillRect(position.positionLegLeft.x, position.positionLegLeft.y, position.positionLegRight.sizeX, position.positionLegRight.sizeY);
    ctx.fillRect(position.positionLegRight.x, position.positionLegRight.y, position.positionLegLeft.sizeX, position.positionLegLeft.sizeY);

    // second hero
    ctx.fillRect(position1.positionBody.x, position1.positionBody.y, position1.positionBody.sizeX, position1.positionBody.sizeY);
    ctx.fillRect(position1.positionHead.x, position1.positionHead.y, position1.positionHead.sizeX, position1.positionHead.sizeY);
    ctx.fillRect(position1.positionHandRight.x, position1.positionHandRight.y, position1.positionHandRight.sizeX, position1.positionHandRight.sizeY);
    ctx.fillRect(position1.positionHandLeft.x, position1.positionHandLeft.y, position1.positionHandLeft.sizeX, position1.positionHandLeft.sizeY);
    ctx.fillRect(position1.positionLegLeft.x, position1.positionLegLeft.y, position1.positionLegRight.sizeX, position1.positionLegRight.sizeY);
    ctx.fillRect(position1.positionLegRight.x, position1.positionLegRight.y, position1.positionLegLeft.sizeX, position1.positionLegLeft.sizeY);
}

document.addEventListener("keydown", (event) => {
    pressedKeys[event.key.toLowerCase()] = true;

    if (event.key === "d" || event.key === "D") {
        const position = move.moveForward();
        draw({ position: position, position1: move1.positionBody });
    }

    if (event.key === "q" || event.key === "Q") {
        hit.HitLeftHand();
        moveInterval("hit");
    }

    if (event.key === "a" || event.key === "A") {
        const position = move.moveBack();
        draw({ position: position, position1: move1.positionBody });
    }
    if (event.key === "s" || event.key === "S") {
        const position = move.changeSide();
        draw({ position: position, position1: move1.positionBody });
    }

    if (event.key.toLowerCase() === "w") {
        let direction = null;
        if (pressedKeys["d"]) {
            direction = "right";
        } else if (pressedKeys["a"]) {
            direction = "left";
        }
        move.jumpUp(direction);
        moveInterval("stateDoubleJump");
    }
});

document.addEventListener("keyup", (event) => {
    delete pressedKeys[event.key.toLowerCase()];
});

function moveInterval(counterEnd: keyof Person) {
    const start = setInterval(() => {
        const position = move.positionBody;

        if (move.positionBody[counterEnd] === 0) {
            clearInterval(start);
        }

        draw({ position: position, position1: move1.positionBody });
    }, 50);
}
