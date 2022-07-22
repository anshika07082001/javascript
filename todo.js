var complete_task =[];
var incomplete_task=[];

function add(){
var input1 = document.getElementById('new-task').value;
incomplete_task.push(input1);
text ="";
    for(i=0;i<incomplete_task.length;i++){
        text += "<li><input type='checkbox'><label>" + input1+"</label><button>Edit</button><button>Delete</button>"+"</li>";
    }
    document.getElementById('incomplete-tasks').innerHTML+=text;
}