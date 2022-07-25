var complete_task =[];
var incomplete_task=[];
function add(){
    var input1 = document.getElementById('new-task');
    incomplete_task.push(input1.value);
    populateincomplete();
    input1.value = "";
}
function populateincomplete(){
    text="";
    for(i=0;i<incomplete_task.length;i++){
        text += "<li><input type='checkbox' onclick='complete(this)'><label>" + incomplete_task[i]+"</label><button onclick='editentry(this)'>Edit</button><button onclick= 'deleteentry(this)'>Delete</button>"+"</li>";
    }
        document.getElementById('incomplete-tasks').innerHTML=text;
    }
    function completepopulate(){
        text ="";
        for(i=0;i<complete_task.length;i++){
            text += "<li><input type='checkbox' onclick='complete1(this)' checked><label>" + complete_task[i]+"</label><button onclick='editentry1(this)'>Edit</button><button onclick='deleteentry1(this)'>Delete</button>"+"</li>";
        }
        document.getElementById('completed-tasks').innerHTML=text;
}
function complete(args){
    let li = args.closest('li');
    let nodes = Array.from(li.closest('ul').children);
    let index = nodes.indexOf(li);
    complete_task.push(incomplete_task[index]);
    incomplete_task.splice(index,1);
    populateincomplete();
    completepopulate();
    text ="";
    for(i=0;i<complete_task.length;i++){
        text += "<li><input type='checkbox' onclick='complete1(this)' checked><label>" + complete_task[i]+"</label><button onclick='editentry1(this)'>Edit</button><button onclick='deleteentry1(this)'>Delete</button>"+"</li>";
    }
    document.getElementById('completed-tasks').innerHTML=text;
}
function deleteentry(args){
    let li = args.closest('li');
    let nodes = Array.from(li.closest('ul').children);
    let index = nodes.indexOf(li);    
    incomplete_task.splice(index,1);
    populateincomplete();
}
function editentry(args){
    let li = args.closest('li');
    let nodes = Array.from(li.closest('ul').children);
    let index = nodes.indexOf(li);
    document.getElementById('new-task').value=incomplete_task[index];
    document.getElementById('btn').innerHTML="Update";
    document.getElementById('btn').onclick=function(){updation(index)};
}
function updation(args)
{
    incomplete_task[args]=document.getElementById('new-task').value;
    populateincomplete();
    document.getElementById('new-task').value="";
    document.getElementById('btn').innerHTML="Add";
    document.getElementById('btn').onclick=function(){add();};
}

function complete1(args){
        let li = args.closest('li');
        let nodes = Array.from(li.closest('ul').children);
        let index = nodes.indexOf(li);
        incomplete_task.push(complete_task[index]);
        complete_task.splice(index,1);
        completepopulate();
        populateincomplete();
}
function editentry1(args){

    let li = args.closest('li');
    let nodes = Array.from(li.closest('ul').children);
    let index = nodes.indexOf(li);
    document.getElementById('new-task').value = complete_task[index];
    document.getElementById('btn').innerHTML="Update";
    document.getElementById('btn').onclick=function(){updation1(index)};
}
function updation1(args){
    complete_task[args]=document.getElementById('new-task').value;
    completepopulate();
    document.getElementById('new-task').value="";
    document.getElementById('btn').innerHTML="Add";
    document.getElementById('btn').onclick=function(){add();};
    
}
function deleteentry1(args){
    let li = args.closest('li');
    let nodes = Array.from(li.closest('ul').children);
    let index = nodes.indexOf(li); 
    complete_task.splice(index,1);
    completepopulate();
}