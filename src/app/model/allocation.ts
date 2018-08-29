export class Allocation {
    constructor(

        public  id : number,
        public requestId : number,
        public vehicleId : number,
        public statusId : number,
        public  isJourneyCompleted : boolean,
        public createdDateTime :Date,
        public createdUserId : number,
        public modifiedDateTime : Date,
        public modifiedUserId :number
 
    ){

    }
}