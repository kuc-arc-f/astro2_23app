import LibCrud from '../../lib/LibCrud';
import LibConfig from '../../lib/LibConfig';
import HttpCommon from '../../lib/HttpCommon';
import Session from '../../lib/Session';
//
const Crud = {
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
      const json = await HttpCommon.post(item, '/todos/delete');
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
//console.log("id=", id);
      const seesionKey = "test2";
      const button: any = document.querySelector('#btn_put');
      button.addEventListener('click', async () => {
        console.log("#put");
        const obj = {id: 1};
        let resulte = await Session.put(seesionKey, JSON.stringify(obj));
      console.log(resulte);
      }); 
      //btn_get
      const btnGet: any = document.querySelector('#btn_get');
      btnGet.addEventListener('click', async () => {
        let resulte = await Session.get(seesionKey);
      console.log(resulte);
      }); 
      //btn_delete
      const btnDelete: any = document.querySelector('#btn_delete');
      btnDelete.addEventListener('click', async () => {
        let resulte = await Session.delete(seesionKey);
      console.log(resulte);
      });
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
Crud.startProc();

export default Crud;
