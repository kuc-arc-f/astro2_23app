<script lang="ts">
import CrudShow from "../CrudShow";
import CrudCreate from "../CrudCreate";
export let id;
let project: any = {};
let selected = 1;

console.log("id=", id);
const startProc= async function() {
	project = await CrudShow.get(id);
	console.log(project);
}
startProc();
//
const save = async function() {
    try{
console.log("#save.selected=", selected); 
        const resulte = await CrudCreate.addItem(Number(id), selected);
console.log(resulte);
        if(resulte) {
            alert("Success, save");
        }
    } catch (e) {
        console.error(e);
        throw new Error('Error , delete_movie');
    }    
}
//onChangeState
function onChangeState(event) {
  selected = event.currentTarget.value;
console.log("selected=", selected)
}
</script>

<!-- MarkUp -->
<div class="container">
    <a class="btn btn-outline-primary" href={`/task_project/show/${id}`}>Back</a>
    <h3>TaskCreate: {project.name}</h3>
	<hr />
    <div class="col-md-9 form-group">
        <label class="fw-bold ">Title:</label>
        <input type="text" name="title" id="title" class="form-control"
    />
    <hr className="mt-2 mb-2" />
    <label>
    <input bind:group={selected} type="radio" name="amount" value={1} 
    class="form-check-input mx-2" />none
    </label>
    <label>
    <input bind:group={selected} type="radio" name="amount" value={2} 
    class="form-check-input mx-2" />working
    </label>
    <label>
    <input bind:group={selected} type="radio" name="amount" value={3} 
    class="form-check-input mx-2" />complete
    </label>
    <hr className="mt-2 mb-2" />
    <div class="col-md-6 form-group">
        <label class="col-sm-12">Scheduled Complete:</label>
        <input type="date"  class="form-control" value="" id="complete" name="complete"                   
            required="required" />        
    </div>

    <hr className="mt-2 mb-2" />
    <div className="col-md-6 form-group">
        <label for="content">内容</label>
        <textarea id="content" name="content" required class="form-control"
        rows="10" placeholder=""></textarea>
    </div>    
    <button class="btn btn-primary my-2" on:click={save}>Save</button>
    <hr class="my-1" />	    
    </div>

</div>

<style>
</style>

<!--
-->