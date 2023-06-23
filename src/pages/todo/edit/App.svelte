<script lang="ts">
import ModalComplete from '../../../components/ModalComplete.svelte';
import CrudEdit from '../CrudEdit';
//
let messageModal = "";
/**
 *
 * @param
 *
 * @return
 */ 
const initProc = async function () {
    try{
        //modal
        MicroModal.init({
            disableScroll: true,
            awaitOpenAnimation: true,
            awaitCloseAnimation: true
        });        
    } catch (e) {
    console.error(e);
    }
}
initProc();
/**
 *
 * @param
 *
 * @return
 */ 
const save = async function () {
    try{
console.log("#test1");
        const result = await CrudEdit.update();
console.log("result=", result);
        if(result === true) {
            messageModal = "Success, save todo";
            MicroModal.show('modal-1');
        } else {
        }
    } catch (e) {
    console.error(e);
    alert("error, test1");
    }
}
//
const okFunction = function () {
//    alert("okFunction");
    window.location.href = '/todo';
}
</script>

<div class="mb-4">
    <button on:click={save} class="btn btn-primary my-0">Save</button>
    <hr />
    <ModalComplete bind:message={messageModal} okFunction={okFunction} />	
</div>

<style>
</style>

<!--
<p>save-Area</p>
-->