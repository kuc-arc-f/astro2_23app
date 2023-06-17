import LibConfig from '../../lib/LibConfig';
import KV from '../../lib/KV';
//
const Crud = {      
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
      const key = "hoge4";
      const button: any = document.querySelector('#btn_put');
      button.addEventListener('click', async () => {
        const item = {id: 1000};
        const result = await KV.put(key, item);
  console.log("result=", result);
        if(result.ret === "OK") {
        }
      });
      //btn_get       
      const btnGet: any = document.querySelector('#btn_get');
      btnGet.addEventListener('click', async () => {
        const result = await KV.get(key);
  console.log(result);
      });
      //btn_delete
      const btn_delete: any = document.querySelector('#btn_delete');
      btn_delete.addEventListener('click', async () => {
        const result = await KV.delete(key);
  console.log(result);
      });

    } catch (e) {
      console.error(e);
    }    
  } 
}
//
Crud.startProc();

export default Crud;
