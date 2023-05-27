import LibCrud from '../../lib/LibCrud';
import LibConfig from '../../lib/LibConfig';
import HttpCommon from '../../lib/HttpCommon';
//
const Crud = {
  /**
   *
   * @param key: any
   *
   * @return
   */      
  porjectGet: async function(id: number) : Promise<any>
  {
    try{
      let item: any = {
        "id": id
      };
      const json = await HttpCommon.post(item, "/project/get");
//console.log(json);       
      item = json.data;
//console.log(item);
      return item;      
    } catch (e) {
      console.error(e);
    }
  },
  /**
   * get:
   * @param key: any
   *
   * @return
   */      
  get: async function(id: number) : Promise<any>
  {
    try{
      let item: any = {
        "id": id
      };
      const json = await HttpCommon.post(item, "/tasks/get");
//console.log(json);       
      item = json.data;
//console.log(item);
      return item;      
    } catch (e) {
      console.error(e);
    }
  },
  /**
   * delete:
   * @param key: any
   *
   * @return
   */   
  delete : async function(id: number) : Promise<any>
  {
    try{
      let ret = false;
      const item = {
        id: id
      }
//console.log(item);
      const json = await HttpCommon.server_post(item, '/tasks/delete');
//console.log(json);
      if (json.ret ===  LibConfig.OK_CODE) {
        ret = true;
      }      
      return ret;      
    } catch (e) {
      console.error(e);
    }
  },  
  /**
  * startProc
  * @param
  *
  * @return
  */   
  startProc :async function (): Promise<void> 
  {
    try{
      console.log("#startProc");
      //btn
      const elm: any = document.querySelector('#item_id');
      const id = elm?.value;
      const button: any = document.querySelector('#btn_delete');
      button.addEventListener('click', async () => {
        const res = await this.delete(Number(id));
console.log(res);
        if(res) {
          alert("Success, delete");
//          window.location.href = '/todo';	
        }
      }); 
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
Crud.startProc();

export default Crud;
