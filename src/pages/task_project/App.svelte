<script lang="ts">
import CrudIndex from "./CrudIndex";
let items = [];
//
const startProc= async function() {
	items = await CrudIndex.getList();
	console.log(items);
}
startProc();
//
const search = async function() {
	console.log("search");
	items = await CrudIndex.search();
	console.log(items);
}

</script>

<div class="">
    <h1>Project</h1>
    <p>markdown display possible.</p>
    <hr class="my-1" />	
    <a href={`/task_project/create`} class="btn btn-primary">Create</a>
    <hr class="my-1" />	
    {#each items as item}
    <div>
        <h3>{item.name}</h3>
        <p>ID : {item.id}
            <a href={`/task_project/show/${item.id}`} class="mx-2 btn btn-sm btn-outline-primary">Show
            </a>
            <a href={`/task_project/edit/${item.id}`} class="btn">[ Edit ]
            </a>			
        </p>
        <hr />
    </div>
    {/each}		
</div>

<style>
</style>

<!--
-->