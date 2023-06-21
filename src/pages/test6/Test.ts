import LibConfig from '../../lib/LibConfig';
//
const Crud = {
  /**
   *
   * @param key: any
   *
   * @return
   */   
  testPdf : async function() : Promise<any>
  {
    try{
      let ret = false;
      console.log("#testPdf");
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
      const button: any = document.querySelector('#btn_test1');
      button.addEventListener('click', async () => {
console.log("#button");
//        const resulte = await this.testPdf();
      }); 
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
Crud.startProc();

export default Crud;
