import { IPerson } from "../class";

export class Hit  {
    private positionBody1: IPerson;
    private positionBody2:IPerson
    constructor(person1: IPerson ,person2:IPerson) {
        this.positionBody1 = person1;
        this.positionBody2 = person2;
    }

    private examinationHit(){
        
    
    }
    private findOutPlayer(player:1|2){
        let playerHit=this.positionBody1
		let playerGetHit=this.positionBody2
	
       if(player==this.positionBody2.player){
		playerHit=this.positionBody2
		playerGetHit=this.positionBody1
	
	   }
       return {
        playerHit,playerGetHit
       }
    }
    checkHit(player:1|2){
const {playerHit,playerGetHit}=this.findOutPlayer(player)


    }


}