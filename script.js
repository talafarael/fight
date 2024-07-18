"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const changeSide_js_1 = require("./changeSide.js");
const class_js_1 = require("./class.js");
const jump_js_1 = require("./jump.js");
const move_js_1 = require("./move.js");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let pressedKeys = {}; // Define pressedKeys here
ctx.fillStyle = "green";
canvas.width = 800;
canvas.height = 600;
// let jump = "";
let arr = { y: 300, x: 25, sizeX: 55, sizeY: 75 };
let arry = { y: 300, x: 325, sizeX: 55, sizeY: 75 };
const person = new class_js_1.Person({ position: arr, player: 1, side: "right" });
const move = new move_js_1.Move(person);
const hit = new class_js_1.Hit(person);
const jump = new jump_js_1.Jump(move, person);
const changeSide = new changeSide_js_1.ChangeSide(person);
const person1 = new class_js_1.Person({ position: arry, player: 2, side: "left" });
const move1 = new move_js_1.Move(person1);
const hit1 = new class_js_1.Hit(person1);
const healBarAndHit = new class_js_1.HealBarAndHit({ positionBody1: person, positionBody2: person1 });
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
            direction = 'right';
        }
        else if (pressedKeys["a"]) {
            direction = 'left';
        }
        jump.jump(direction);
        moveInterval("stateDoubleJump");
    }
});
document.addEventListener("keyup", (event) => {
    delete pressedKeys[event.key.toLowerCase()];
});
function moveInterval(counterEnd) {
    const start = setInterval(() => {
        console.log('aaaa');
        if (person[counterEnd] === 0) {
            clearInterval(start);
        }
        draw();
    }, 50);
}
