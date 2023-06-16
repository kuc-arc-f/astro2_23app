<script lang="ts">
import LibCommon from "../../lib/LibCommon";
import CrudIndex from "./CrudIndex";
import PaginateBox from "../../components/PaginateBox.svelte";
//
let items = [];
let itemPage = 1, itemsAll = [], perPage: number = 10;
//
const startProc= async function() {
    items = await CrudIndex.getList();
    itemsAll = items;
    items = await CrudIndex.getPageList(items, itemPage, perPage);
console.log(items);
}
startProc();
//
const search = async function() {
    console.log("search");
    itemPage = 1;
	itemsAll = await CrudIndex.search();
    items = await CrudIndex.getPageList(itemsAll, itemPage, perPage);
	console.log(items);
}
//
const clearSearch = async function() {
//    console.log("search");
  const seachKey = (<HTMLInputElement>document.querySelector("#searchKey"));
  seachKey.value = "";
  await startProc();
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
    items = await CrudIndex.getPageList(itemsAll, page, perPage);
//console.log(items);
}
</script>

<div class="">
    <div class="row">
      <div class="col-md-6">
        <h1>ErChart</h1>
        <p>mermaid.js display possible.</p>
      </div>
      <div class="col-md-6 text-end">
        <a href={`/er_chart/create`} class="btn btn-primary">Create</a>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <button class="btn btn-sm btn-outline-primary" 
        on:click={clearSearch}>Clear</button>
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
        <a href={`/er_chart/show/${item.id}`} ><h3>{item.title}</h3>
        </a>
        <p>{LibCommon.converDateString(item.createdAt)},
            ID : {item.id}
            <a href={`/er_chart/edit/${item.id}`} class="btn btn-sm btn-outline-primary mx-2">Edit
            </a>			
        </p>
        <hr class="my-1" />
    </div>
    {/each}
    <PaginateBox  itemPage={itemPage} parentUpdateList={parentUpdateList} />		
</div>

<style>
</style>

<!--
-->