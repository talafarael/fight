import { Move, Person } from "./class.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let pressedKeys = {}; // Define pressedKeys here

ctx.fillStyle = "green";
canvas.width = 800;
canvas.height = 600;
let jump = '';
let arr = { y: 300, x: 25 };
ctx.fillRect(arr.x, arr.y, 55, 75);
ctx.fillRect(arr.x, arr.y, 75, 75);
const person = new Person(arr);
const move = new Move(person);

function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(arr.x, arr.y,  50, 75);
    ctx.fillRect(arr.x+18.5, arr.y-25, 25, 25);
}

document.addEventListener('keydown', async (event) => {
    pressedKeys[event.key.toLowerCase()] = true;

    if (event.key === 'd' || event.key === 'D') {
       
        arr.x = move.moveForward().x;
        console.log('da');
        draw();
        
    }
    if (event.key === 'a' || event.key === 'A') {
        
        arr.x = move.moveBack().x;
        
        draw();
    }

    if (event.key.toLowerCase() === 'w') {
        
            let direction = null;
            if (pressedKeys['d']) {
                direction = 'right';
            } else if (pressedKeys['a']) {
                direction = 'left';
            }

           move.jumpUp(direction)
            
            setInterval(() => {
                arr = move.positionBody.positionBody;
                draw();
                
            }, 50); 
            
     
      
    }
});

document.addEventListener('keyup', (event) => {
    delete pressedKeys[event.key.toLowerCase()];
});
