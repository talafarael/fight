import { Move, Person } from "./class.js"


const person=new Person()
const move =new  Move(person)

person.positionBody = 11;
console.log(person.positionBody)
console.log(move.positionBody)