import { Move, Person } from "./class.js"
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let twoJump
ctx.fillStyle = "green";
canvas.width = 800;
canvas.height = 600;
let arr={y:300,x:25}
ctx.fillRect(arr.x,arr.y, 75, 75);

const person=new Person(arr)
const move =new  Move(person)
function draw() {
    // Очистка canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillRect(arr.x, arr.y, 75, 75);
}




document.addEventListener('keydown',async (event) => {
 
    if (event.key === 'd' || event.key === 'D') {
       arr= move.moveForward()
        console.log('Клавиша "d" нажата');
       console.log(arr)
       draw();
    }
    if (event.key === 'a' || event.key === 'A') {
        arr= move.moveBack()
         console.log('Клавиша "d" нажата');
        console.log(arr)
        draw();
     }
     if (event.key === 'w' || event.key === 'W') {
						
       let result= move.jumpUp().then((result) => {
								if (result) {
									twoJump=0
								}
				});
				twoJump++
        setInterval(()=>{
								
         arr= move.positionBody.positionBody
         
          draw();
        },50)
       
     }
});  