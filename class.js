export class Person{
    
       positionBody = 'a'; 
  
    set positionBody(value){
        this.positionBody=value
    }
    get positionBody(){
        return this.positionBody;
    }
}
export class Move extends Person{
   positionBody=this.positionBody
    set positionBody(value){
        this.positionBody=value
    }
    get positionBody(){
         return this.positionBody;
    }
}