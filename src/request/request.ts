import server from './server'
class MyServer {
  server: any
  nowHandle: null
  constructor() {
    this.server = server
    this.nowHandle = null
  }
  vBind(vThis: any) {
    this.nowHandle = vThis
  }
  parseRouter(name: string, urlObj: Object) {
    (this as any)[name] = {}
    Object.keys(urlObj).forEach((apiName) => {
      (this as any)[name][apiName] = this.sendMsg.bind(this, name, apiName, (urlObj as any)[apiName]);
      // (name as any)[apiName].state = 'ready'
    })
  }
  sendMsg(modelName: string, apiName: string, url: string, config?: any) {
    var self = this
    var configA = config || {}
    var method = (configA as any).method || 'get'
    var data = (configA as any).data || {}
    var before = function (res: any) {
      return res
    }
    var defaultFn = function (res: any): any {
      return res
    }
    var success: any = (configA as any).success || defaultFn
    return this.server[method](url, data).then((res: any) => {
      before(res)
      return Promise.resolve(res.data)
    }).then(success)
  }
}
// MyServer.prototype.v = function (vThis: any) {
//   this.nowHandle = vThis
// }
export default new MyServer