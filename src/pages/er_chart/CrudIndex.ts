import LibCrud from '../../lib/LibCrud';
import LibConfig from '../../lib/LibConfig';
import HttpCommon from '../../lib/HttpCommon';
import LibAuth from '../../lib/LibAuth';
//
const CrudIndex = {
  /**
  * getList
  * @param
  *
  * @return
  */
  getList :async function (): Promise<any>
  {
    try{
      const postItem = {
        userId: LibAuth.getUserId(),
      }
//console.log(postItem);
      const json = await HttpCommon.server_post(postItem, "/er_chart/get_list");
console.log(json);      
      let items: any[] = [];
      items = json.data;
console.log(items);
      return items;
    } catch (e) {
      console.error(e);
      throw new Error("Error, getList");
    } 
  }  ,  
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
      //
      const button: any = document.querySelector('#status_complete');
      button.addEventListener('click', async () => {
        console.log("#status_complete");
//        const result = await this.addItem();
//        console.log("result=", result);
      });      
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
//CrudIndex.startProc();

export default CrudIndex;
