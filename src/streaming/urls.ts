class UrlFactory{
    private readonly hub:string;
    private readonly credentials:Credentials;
    private readonly rtmpPubDomain:string;
    private readonly rtmpPlayDomain:string;
    private readonly hlsDomain:string;
    private readonly hdlDomain:string;
    private readonly snapDomain:string;
    constructor(hub:string, credentials:Credentials, rtmpPubDomain:string, rtmpPlayDomain:string,
    hlsDomain?:string, hdlDomain?:string, snapDomain?:string){
        this.hub = hub;
        this.credentials = credentials;
        this.rtmpPubDomain = rtmpPubDomain;
        this.rtmpPlayDomain = rtmpPlayDomain;
        this.hlsDomain = hlsDomain;
        this.hdlDomain = hdlDomain;
        this.snapDomain = snapDomain;
    }

    rtmpPublishUrl(streamKey:string): string{
        return `rtmp://${ this.rtmpPubDomain }/${ this.hub }/${ streamKey}`;
    }

    rtmpPublishUrlWithExpire(streamKey:string, expireAfterSeconds:number): string{
        return `rtmp://${ this.rtmpPubDomain }/${ this.hub }/${ streamKey }`;
    }

    rtmpPlayUrl(streamKey:string){
        return `rtmp://${ this.rtmpPlayDomain }/${ this.hub }/${ streamKey }`;
    }

    hlsPlayUrl(streamKey:string){
        return `http://${ this.hlsDomain }/${ this.hub }/${ streamKey }`;
    }

    hdlPlayUrl(streamKey:string){
        return `http://${ this.hdlDomain }/${ this.hub }/${ streamKey }`;
    }

    snapUrl(streamKey:string){
        return `http://${ this.snapDomain }/${ this.hub }/${ streamKey }.jpg`;
    }
}
