import myServer from '../request/request'
import shop from './shop'
import login from './login'
myServer.parseRouter('login',login,)
myServer.parseRouter('shop',shop,)
export default myServer