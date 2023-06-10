<script lang="ts">
import PaginateBox from "./PaginateBox.svelte";
import CrudIndex from "./CrudIndex";
let items = [], itemsTodos = [], completeType = 0;
let itemPage = 1, itemsAll = [], perPage: number = 10;
//

const startProc= async function() {
    itemsTodos = await CrudIndex.getList();
    items = itemsTodos.filter(item => (item.completed === completeType));
    items = await CrudIndex.getPageList(items, itemPage, perPage);
    console.log(items);
}
startProc();
//
const search = async function() {
    console.log("search");
    items = await CrudIndex.search();
    console.log(items);
}
//
const changeComplete = async function() {
    itemPage = 1;
    completeType = 1;
console.log("#changeComplete", completeType); 
    items = itemsTodos.filter(item => (item.completed === completeType));
    items = await CrudIndex.getPageList(items, itemPage, perPage);
console.log(items);
}
//
const changeActive = async function() {
    itemPage = 1;
    completeType = 0;
console.log("#changeActive=", completeType); 
    items = itemsTodos.filter(item => (item.completed === completeType));
    items = await CrudIndex.getPageList(items, itemPage, perPage);
console.log(items);
}
/**
* parentUpdateList
* @param
*
* @return
*/ 
const parentUpdateList = async function(page: number) {
    console.log("parentUpdateList=", page);
    itemPage = page;
    items = itemsTodos.filter(item => (item.completed === completeType));
    items = await CrudIndex.getPageList(items, page, perPage);
    console.log(items);
}
</script>

<div class="my-4">
    <h1>Todos</h1>
    <p>markdown display possible.</p>
    <hr class="my-1" />	
    <a href={`/todo/create`} class="btn btn-primary">Create</a>
    <hr class="my-1" />	
    <button id="status_none" class="btn btn-outline-primary" on:click={changeActive}
    >Active</button>	
    <button class="btn btn-outline-primary" on:click={changeComplete}>Complete</button>
    <hr class="my-1" />	
    {#each items as item}
    <div>
        <h3>{item.title}</h3>
        <p>ID : {item.id}
            <a href={`/todo/show/${item.id}`} class="mx-2 btn btn-sm btn-outline-primary">Show
            </a>
            <a href={`/todo/edit/${item.id}`} class="btn">[ Edit ]
            </a>			
        </p>
        <hr />
    </div>
    {/each}
    <PaginateBox  itemPage={itemPage} parentUpdateList={parentUpdateList} />		
</div>

<style>
</style>

<!--
-->