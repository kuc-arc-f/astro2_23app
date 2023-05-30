import LibConfig from '../../lib/LibConfig';
import Crud from './Crud';
import HttpCommon from '../../lib/HttpCommon';
import LibCommon from '../../lib/LibCommon';
import LibAuth from '../../lib/LibAuth';
//
const CrudCreate = {

  /**
   * addItem:
   * @param key: any
   *
   * @return
   */
  addItem : async function() : Promise<any>
  {
    try{
      let ret = false;
      let values = Crud.getInputValues();
      values.userId = LibAuth.getUserId();
//console.log(values);
      const json = await HttpCommon.server_post(values, '/plan/create');
console.log(json);
      if (json.ret ===  LibConfig.OK_CODE) {
        ret = true;
      } 
      return ret;
    } catch (e) {
      console.error("Error, addItem");
      console.error(e);
      throw new Error('Error , addItem');
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
      const button: any = document.querySelector('#btn_save');
      button.addEventListener('click', async () => {
        const result = await this.addItem();
        console.log("result=", result);
        if(result === true) {
          window.location.href = '/plan';
        }
      });
      //
      //p_date
      const dt = LibCommon.formatDate(new Date(), 'YYYY-MM-DD')
      const p_date: any = document.querySelector('#p_date');
      p_date.value = dt;
//console.log(dt);
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
CrudCreate.startProc();

export default CrudCreate;
