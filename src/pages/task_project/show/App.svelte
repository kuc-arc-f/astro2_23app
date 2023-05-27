<script lang="ts">
import TaskIndex from "../../task_items/CrudIndex";
import IndexRow from "./IndexRow.svelte";
export let id;
let items: any[] = [], itemsNone = [], itemsWorking = [], itemsComplete = [];
let selected = 1;

console.log("id=", id);
const startProc= async function() {
    items = await TaskIndex.getList(id);
    console.log(items);
    itemsNone = items.filter(item => (item.status === '1') );
    console.log(itemsNone);
    itemsWorking = items.filter(item => (item.status === '2') );
    console.log(itemsWorking);
    itemsComplete = items.filter(item => (item.status === '3') );
    console.log(itemsComplete);
}
startProc();
</script>

<!-- MarkUp -->
<div class="container">
    <div class="row">
        <div class="col-md-4 text-center">None</div>
        <div class="col-md-4 text-center">Working</div>
        <div class="col-md-4 text-center">Complete</div>
    </div>     
    <div class="row">	 
        <div class="col-md-4">
        {#each itemsNone as item}
            <IndexRow id={item.id} title={item.title} status="1" />
        {/each}
        </div>
        <div class="col-md-4">
        {#each itemsWorking as item}
            <IndexRow id={item.id} title={item.title} status="2" />
        {/each}
        </div>
        <div class="col-md-4">
        {#each itemsComplete as item}
            <IndexRow id={item.id} title={item.title} status="3" />
        {/each}
        </div>
    </div>   

</div>

<style>
</style>

<!--
-->