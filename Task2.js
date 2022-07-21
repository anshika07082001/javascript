const arrFrom = ["option1","option2","option3","option4"];
const arrTo = [];
var sel = document.getElementById('dselect');
var sel2 = document.getElementById('design');

for(i=0;i<arrFrom.length;i++)
{
    var opt = arrFrom[i];
    var arr2From = document.createElement("option");
    arr2From.textContent=opt;
    sel.appendChild(arr2From);
}
function clickk(){
    for(i=0;i<arrFrom.length;i++)
    {
        if(sel.options[i].selected)
        {
            var index = sel.options[i].index;
            console.log(index);
            temp =arrFrom.splice(index,1);
            arrTo.push(temp[0]);  
            sel.remove(index); 
            i--;         
        }
    }
    
    for(i=0;i<arrTo.length;i++)
{
    var opt = document.createElement("option");
    opt.textContent=arrTo[i];
    sel2.appendChild(opt);
}


}
    