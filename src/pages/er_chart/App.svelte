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
//console.log(items);
}
startProc();
//
const search = async function() {
	console.log("search");
	items = await CrudIndex.search();
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
    items = await CrudIndex.getPageList(itemsAll, page, perPage);
//console.log(items);
}
</script>

<div class="">
    <h1>ErChart</h1>
    <p>mermaid.js display possible.</p>
    <hr class="my-1" />	
    <a href={`/er_chart/create`} class="btn btn-primary">Create</a>
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
        <hr />
    </div>
    {/each}
    <PaginateBox  itemPage={itemPage} parentUpdateList={parentUpdateList} />		
</div>

<style>
</style>

<!--
-->