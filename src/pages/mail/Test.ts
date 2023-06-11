//import LibCrud from '../../lib/LibCrud';
import LibConfig from '../../lib/LibConfig';
import HttpCommon from '../../lib/HttpCommon';
import Session from '../../lib/Session';
import Crud from './Crud';
//
const Test = {
  /**
   *
   * @param key: any
   *
   * @return
   */   
  sendMail : async function() : Promise<any>
  {
    try{
      let ret = false;
      let values = Crud.getInputValues();
//console.log(values);
      const item = {
        to_mail: values.to_mail_address,
        title: values.title,
        content: values.content,
      }
console.log(item);
//return;
      const res = await fetch("/api/send_mail", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},      
        body: JSON.stringify(item)
      });
      const json = await res.json()      
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
      const button: any = document.querySelector('#btn_test');
      button.addEventListener('click', async () => {
        console.log("#btn_test");
        const obj = {id: 1};
        const resulte = await this.sendMail(); 
console.log(resulte);
      }); 
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
Test.startProc();

export default Test;
