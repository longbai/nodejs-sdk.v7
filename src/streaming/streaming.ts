interface StreamAttribute{
    createdAt: number;
    updatedAt: number;
    expireAt: number;
    disabledTill: number;
}

interface ActivityRecord{
    start: number;
    end: number;
}

class StreamListing{
    readonly marker:string;
    readonly keys:string[];

    constructor(keys:string[], marker:string){
        this.keys = keys;
        this.marker = marker;
    }

    isEOF():boolean{
        return this.marker === null || this.marker === "";
    }
}

interface StreamFps{
    audio: number;
    video: number;
    data: number;
}

interface StreamStatus{
    startAt: number;
    clientIP: string;
    bps: number;
    fps: StreamFps;
}

class StreamingManager{
    private client:Client;
    private readonly apiServer:string;
    private readonly hub:string;
    private readonly credentials:Credentials;
   
    constructor(credentials:Credentials, hub:string, apiServer:string="http://pili.qiniuapi.com"){
        this.hub = hub;
        this.credentials = credentials;
        this.apiServer = apiServer;
        this.client = new Client();
    }

    create(key:string, callback){

    }

    attribute(key:string, callback){

    }

    listStreams(callback){

    }

    disableTill(key:string, epoch:number, callback){

    }

    enable(key:string, callback){

    }

    status(key:string, callback){

    }

    saveAs(key:string, fileName:string, start:number = 0, end:number = 0, callback){

    }

    history(key:string, callback){

    }

    private encodeKey(key:string): string{
        return "/" + urlSafeBase64Encode(key);
    }

    private httpGet(){

    }

    private httpPost(){

    }

}