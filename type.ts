export interface IPosition{
    x:number
    y:number
    sizeX:number
    sizeY:number
}
export type Side='left'|'right'

export interface IConstructor{
   position:IPosition;
   player:1|2
   side:'left'|'right'
}
export interface IInheritance{
    positionBody :{ stateDoubleJump:number
	player:1|2
	side:'left'|'right'
	statusHit:number
	health:number
	hit:number
	positionHead:IPosition
	positionBody:IPosition
	positionLegLeft:IPosition
	positionLegRight:IPosition
	positionHandLeft:IPosition
	positionHandRight:IPosition}
}

export interface IInheritance{
    positionBody :{ stateDoubleJump:number
	player:1|2
	side:'left'|'right'
	statusHit:number
	health:number
	hit:number
	positionHead:IPosition
	positionBody:IPosition
	positionLegLeft:IPosition
	positionLegRight:IPosition
	positionHandLeft:IPosition
	positionHandRight:IPosition}
}
// export interface IClassInheritance{
// 	positionBody:IInheritance
// }