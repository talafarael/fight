import { IPerson } from "../class";
export interface ICheckHit{
  
        checkHit(player: 1 | 2): void;
    
}
export class CheckHit  {
    private positionBody1: IPerson;
    private positionBody2:IPerson
    constructor(person1: IPerson ,person2:IPerson) {
        this.positionBody1 = person1;
        this.positionBody2 = person2;
    }

    private examinationHitHead(playerHit:IPerson,playerGetHit:IPerson){
        if(playerHit.statusHit ==0){
            if(playerHit.positionHandLeft.x+playerHit.positionHandLeft.sizeX>=playerGetHit.positionHead.x
             && playerHit.positionHandLeft.x+playerHit.positionHandLeft.sizeX<=playerGetHit.positionHead.x+playerGetHit.positionHead.sizeX+playerHit.positionHandLeft.sizeX){
     
             if(playerHit.positionHandLeft.y>=playerGetHit.positionHead.y
                 && playerHit.positionHandLeft.y<=playerGetHit.positionHead.y+playerGetHit.positionHead.sizeY+playerHit.positionHandLeft.sizeY){
                  console.log('aaaaaahhhhhhhhhhhha')
                }
               
     }
    
    }
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
this.examinationHitHead(playerHit,playerGetHit)

    }


}