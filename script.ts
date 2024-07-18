
import { ChangeSide } from "./changeSide.js";
import { HealBarAndHit, Hit, Person } from "./class.js";
import { Jump } from "./jump.js";
import { Move } from "./move.js";
import { IClassInheritance, IConstructor, IInheritance, IPosition, IPressedKeys } from "./type.js";

const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement; 
const ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

let pressedKeys: IPressedKeys = {}; // Define pressedKeys here

ctx.fillStyle = "green";
canvas.width = 800;
canvas.height = 600;
// let jump = "";
let arr: IPosition = { y: 300, x: 25, sizeX: 55, sizeY: 75 };
let arry: IPosition = { y: 300, x: 325, sizeX: 55, sizeY: 75 };
const person = new Person({ position: arr, player: 1, side: "right" });
const move = new Move(person);
const hit = new Hit(person);
const jump = new Jump( move,person );
const changeSide =new ChangeSide(person)
const person1 = new Person({ position: arry, player: 2, side: "left" });
const move1 = new Move(person1);
const hit1 = new Hit(person1);
const healBarAndHit = new HealBarAndHit({ positionBody1: person, positionBody2: person1 });
draw();

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    person.draw(ctx);
    person1.draw(ctx);
}

document.addEventListener("keydown", (event) => {
    pressedKeys[event.key.toLowerCase()] = true;

    if (event.key === "d" || event.key === "D") {
        move.moveForward();
        draw();
    }

    if (event.key === "q" || event.key === "Q") {
        hit.HitLeftHand();
        moveInterval("hit");
    }

    if (event.key === "a" || event.key === "A") {
         move.moveBack();
         draw();
    }
    if (event.key === "s" || event.key === "S") {
      changeSide.changeSide();
        // draw({ position: position, position1: move1.positionBody });
    }

    if (event.key.toLowerCase() === "w") {
        let direction = null;
        if (pressedKeys["d"]) {
            direction='right'
        } else if (pressedKeys["a"]) {
            direction='left'
        }
        jump.jump(direction);
        moveInterval("stateDoubleJump");
    }
});

document.addEventListener("keyup", (event) => {
    delete pressedKeys[event.key.toLowerCase()];
});

function moveInterval(counterEnd: keyof Person) {
    const start = setInterval(() => {
       console.log('aaaa')

        if (person[counterEnd] === 0) {
            clearInterval(start);
        }

        draw();
    }, 50);
}
