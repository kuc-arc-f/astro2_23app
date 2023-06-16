<script lang="ts">
import PaginateBox from "./PaginateBox.svelte";
import CrudIndex from "./CrudIndex";
import LibCommon from "../../lib/LibCommon";
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
    itemPage = 1;
    itemsTodos = await CrudIndex.search();
    items = itemsTodos.filter(item => (item.completed === completeType));
    items = await CrudIndex.getPageList(items, itemPage, perPage);
    console.log(items);
}
//
const clearSearch = async function() {
//    console.log("search");
  const seachKey = (<HTMLInputElement>document.querySelector("#searchKey"));
  seachKey.value = "";
  startProc();
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

<div class="mb-4">
    <div class="row">
      <div class="col-md-6">
        <h1>Todos</h1>
        <p>markdown display possible.</p>
      </div>
      <div class="col-md-6 text-end">
        <a href={`/todo/create`} class="btn btn-primary">Create</a>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <button id="status_none" class="btn btn-outline-primary" on:click={changeActive}
        >Active</button>	
        <button class="btn btn-outline-primary" on:click={changeComplete}>Complete</button>
      </div>
      <div class="col-md-6 text-end">
        <button class="btn btn-sm btn-outline-primary" on:click={clearSearch}
        >Clear</button>
        <span class="search_key_wrap">
          <input type="text" size="24" class="mx-2" name="searchKey" id="searchKey"
           placeholder="Title search">
        </span>
        <button class="btn btn-sm btn-outline-primary" on:click={search}>Search</button>      
      </div>
    </div>    
    <hr class="my-1" />	
    {#each items as item}
    <div>
        <a href={`/todo/show/${item.id}`} ><h3>{item.title}</h3>
        </a>    
        <span>
            {LibCommon.converDateString(item.createdAt)},
            ID : {item.id}
            <a href={`/todo/edit/${item.id}`} class="btn btn-sm btn-outline-primary mx-2">Edit
            </a>			
        </span>
        <hr class="my-2" />
    </div>
    {/each}
    <PaginateBox  itemPage={itemPage} parentUpdateList={parentUpdateList} />		
</div>

<style>
</style>

<!--
<h3>{item.title}</h3>
-->