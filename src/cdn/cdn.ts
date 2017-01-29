class CdnManager{
    private readonly apiServer:string;
    private credentials:Credentials;
    private client:Client;

    constructor(credentials:Credentials, apiServer:string = "http://fusion.qiniuapi.com"){
        this.apiServer = apiServer;
        this.credentials = credentials;
        this.client = new Client();
    }

    /**
     * 刷新链接列表，每次最多不可以超过100条链接
     *
     * @link http://developer.qiniu.com/article/fusion/api/refresh.html
     */
    refreshUrls(urls:string[], callback){

    }

    /**
     * 刷新目录列表，每次最多不可以超过10个目录
     * 刷新目录需要额外开通权限，可以联系七牛技术支持处理
     *
     * @link http://developer.qiniu.com/article/fusion/api/refresh.html
     */
    refreshDirs(dirs:string[], callback){

    }

    refreshUrlsAndDirs(urls:string[], dirs:string[], callback){

    }

    /**
     * 预取文件链接，每次最多不可以超过100条
     *
     * @link http://developer.qiniu.com/article/fusion/api/prefetch.html
     */
    prefetchUrls(urls:string[], callback){
    }

    /**
     * 获取域名访问带宽数据
     *
     * @link http://developer.qiniu.com/article/fusion/api/traffic-bandwidth.html
     */
    getBandwidthData(domains:string[], startDate:string, endDate:string, granularity:string,
        callback){
    }

    /**
     * 获取域名访问流量数据
     *
     * @link http://developer.qiniu.com/article/fusion/api/traffic-bandwidth.html
     */
    getFluxData(domains:string[], startDate:string, endDate:string, granularity:string,
        callback) {
    }

    /**
     * 获取CDN域名访问日志的下载链接
     *
     * @link http://developer.qiniu.com/article/fusion/api/log.html
     */
    getCdnLogList(domains:string[], logDate:string) {
    }

    /**
     * 构建标准的基于时间戳的防盗链
     *
     */
    createTimestampAntiLeechUrl(){}
          
    }
}