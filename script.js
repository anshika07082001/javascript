var arr=[]
var index=''

function submitHandler(){
    var txt = document.getElementById('btn').innerText
    if(txt=='Add Product'){
    var idInp= document.getElementById('idInp').value;
    var nameInp=document.getElementById('nameInp').value;
    var priceInp=document.getElementById('priceInp').value;
    if(idInp!='' && nameInp!='' && priceInp!=''){
    var obj={Id:idInp,Name:nameInp,Price:priceInp}
    arr.push(obj)
    }
    else{
        alert('Fill Details')
    }
    }
    else{
        arr[index].Id=document.getElementById('idInp').value;
        arr[index].Name=document.getElementById('nameInp').value;
        arr[index].Price=document.getElementById('priceInp').value;
        document.getElementById('btn').innerText='Add Product';
    }
    document.getElementById('idInp').value=''
    document.getElementById('nameInp').value=''
    document.getElementById('priceInp').value=''
    populate()
}

function populate(){
    var text =''
    text='<table><tr><th>Product Id</th><th>Product Name</th><th>Product Price</th><th>Edit Action</th><th>Delete Action</th></tr>';
    if(arr.length>0){
        arr.map((item,i)=>{
            return(
                text+='<tr><td>'+item.Id+'</td><td>'+item.Name+'</td><td>'+item.Price+'</td><td><button onclick=edit(this) index='+i+'>Edit</button></td><td><button onclick=deleteBtn(this) index='+i+'>Delete</button></td></tr>'  
            )
        })
        text+='</table>'
        document.getElementById('tableContent').innerHTML=text;
    }
    else{
        document.getElementById('tableContent').innerHTML='';
    }
}

function edit(args){
    index = args.getAttribute('index')
    document.getElementById('idInp').value=arr[index].Id;
    document.getElementById('nameInp').value=arr[index].Name;
    document.getElementById('priceInp').value=arr[index].Price;
    document.getElementById('btn').innerText='Update Product';
}

function deleteBtn(args){
    index = args.getAttribute('index')
    arr.splice(index,1)
    populate()
}