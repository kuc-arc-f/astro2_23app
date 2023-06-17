import LibCookie from './LibCookie';
import LibConfig from './LibConfig';
//import HttpCommon from './HttpCommon';
import HttpKv from './HttpKv';
//
const KV = {
  /* put, get, delete */
  /**
  * 
  * @param
  *
  * @return
  */ 
  delete: async function(key: string): Promise<any>
  {
    try {
      let ret = false;
      const item = {
        key: key,
      }
console.log(item);
      const json = await HttpKv.server_post(item, '/delete');
console.log(json);
      if (json.ret ===  LibConfig.OK_CODE) {
        ret = true;
      }      
      return ret;
    } catch (e) {
      console.error(e);
      throw new Error('Error , delete');
    }
  }, 
  /**
  * 
  * @param
  *
  * @return
  */ 
  get: async function(key: string): Promise<any>
  {
    try {
      let ret = null;
//console.log("sid=", sid);      
      const item = {
        key: key,
      }
console.log(item);
      const json = await HttpKv.server_post(item, '/get');
//console.log(json);
      if (json.ret ===  LibConfig.OK_CODE) {
        ret = json;
        ret.data = JSON.parse(json.data);
      }      
      return ret;
    } catch (e) {
      console.error(e);
      throw new Error('Error , get');
    }
  },   
  /**
  * 
  * @param
  *
  * @return
  */ 
  put: async function(key: string, value: any): Promise<any>
  {
    try {
      let ret = false;
      const postValue: any = JSON.stringify(value);
      const item = {
        key: key,
        value: postValue
      }
console.log(item);      
//console.log("sid=", sid);      
      const json = await HttpKv.server_post(item, '/put');
console.log(json);      
      if (json.ret ===  LibConfig.OK_CODE) {
        ret = true;
      }       
      return ret;
    } catch (e) {
      console.error(e);
      throw new Error('Error , put');
    }
  },
  /**
  * 
  * @param
  *
  * @return
  */ 
  getSessionId: function(): string
  {
    try {
      let ret = "";
      const key = LibConfig.COOKIE_KEY_SESSION;
      const sid = LibCookie.get_cookie(key);
//console.log("sid=", sid);
      //add SessionId
      //@ts-ignore
      ret = sid;
      if(sid === null) {
        const rand = Number(Math.random() * 1000000);
        //@ts-ignore
        let newSid = Date.now() + "-" + String(parseInt(rand));
        ret = newSid;
        LibCookie.set_cookie(key, newSid);
      }
      return ret;
    } catch (e) {
      console.error(e);
      throw new Error('Error , getSessionId');
    }
  },
 
}
export default KV;
