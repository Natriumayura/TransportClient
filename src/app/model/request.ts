export class Request {
    constructor(
        public  id :number,
        public  requestBy :string="",
        public  requestedDate :Date,
        public  neededDateTime :Date,
        public  returnDateTime :Date,
        public  requestDescription :string,
        public  requestPurposeId :number,
        public  customPurpose :string="",
        public  requestApproveStatusId :number,
        public  statusId :number,
        public  createdDateTime :Date ,
        public  userId :number,
        public  modifiedDateTime :Date,
        public  modifiedUserId : number            
    ){

    }
}