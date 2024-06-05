import { Move, Person } from "./class.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let twoJump = 0;
let pressedKeys = {}; // Define pressedKeys here

ctx.fillStyle = "green";
canvas.width = 800;
canvas.height = 600;
let jump = '';
let arr = { y: 300, x: 25 };
ctx.fillRect(arr.x, arr.y, 75, 75);

const person = new Person(arr);
const move = new Move(person);

function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(arr.x, arr.y, 75, 75);
}

document.addEventListener('keydown', async (event) => {
    pressedKeys[event.key.toLowerCase()] = true;

    if (event.key === 'd' || event.key === 'D') {
        jump = 'right';
        arr.x = move.moveForward().x;
        console.log('da');
        draw();
        jump = '';
    }
    if (event.key === 'a' || event.key === 'A') {
        jump = 'left';
        arr.x = move.moveBack().x;
        jump = '';
        draw();
    }

    if (event.key.toLowerCase() === 'w') {
        if (twoJump < 2) {
            let direction = null;
            if (pressedKeys['d']) {
                direction = 'right';
            } else if (pressedKeys['a']) {
                direction = 'left';
            }

            move.jumpUp(direction).then((result) => {
                if (result) {
                    twoJump = 0;
                }
            });
            twoJump++;
            setInterval(() => {
                arr = move.positionBody.positionBody;
                draw();
            }, 50);
        }
    }
});

document.addEventListener('keyup', (event) => {
    delete pressedKeys[event.key.toLowerCase()];
});