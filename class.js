export class Person{
    positionBody;
    constructor(position){
       this.positionBody = position; 
  }
    set positionBody(value){
        this.positionBody=value
    }
    get positionBody(){
        return this.positionBody;
    }
}
export class Move extends Person  {
    constructor(positionBody){
   super(positionBody)
}
   
    moveForward(){
        if(this.positionBody.positionBody.x<725){
        this.positionBody.positionBody.x=this.positionBody.positionBody.x+10
        return this.positionBody.positionBody
    }
        return this.positionBody.positionBody
    }
    moveBack(){
        if(this.positionBody.positionBody.x>25){
        this.positionBody.positionBody.x=this.positionBody.positionBody.x-10
        return this.positionBody.positionBody
    }
        return this.positionBody.positionBody
    }
    jumpUp(){
        setInterval(()=>{
        this.positionBody.positionBody.y=this.positionBody.positionBody.y-10
        
    },1000)
    }
    get positionBody(){
         return this.positionBody;
    }
}