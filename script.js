var sel1='',sel2='',chk='',arr=[],employee={},foodItems={},arr2=[]

function select1(){
    sel1 = document.getElementById('sel1').value
}

function select2(){
    sel2=document.getElementById('sel2').value
}

function check(args){
    chk = args.checked
}

function showDetails(){
    if(sel1!='' && sel2!='' && chk!=''){
    var obj ={position:sel1,type:sel2,available:chk}
    arr.push(obj)
    populate()
    }
    else{
        alert('Fill Details')
    }
    employee=obj
}

function populate(){
    var text=''
    text='<table><tr><th>Position</th><th>Type</th><th>Availability</th></tr>'
    arr.map((item)=>{
        return(
            text+='<tr><td>'+item.position+'</td><td>'+item.type+'</td><td>'+item.available+'</td></tr>'
        )
        
    })
    text+='</table>'
    document.getElementById('tableShow').innerHTML=text
}

function add(){
    var foodInp = document.getElementById('foodInp').value
    var obj={food:foodInp}
    foodItems=Object.assign(employee,obj)
    arr2.push(foodItems)
    populate2()
}

function populate2(){
    var text=''
    text='<table><tr><th>Position</th><th>Type</th><th>Availability</th><th>Food</th></tr>'
    arr2.map((item)=>{
        return(
            text+='<tr><td>'+item.position+'</td><td>'+item.type+'</td><td>'+item.available+'</td><td>'+item.food+'</tr>'
        )
        
    })
    text+='</table>'
    document.getElementById('foodItems').innerHTML=text
}

function getValues(){
    var values = Object.values(foodItems)
    document.getElementById('values').innerHTML=values
}

function getKeys(){
    var keys = Object.keys(foodItems)
    document.getElementById('keys').innerHTML=keys
}

function prevent(){
    console.log('Before Freeze',foodItems)
    Object.freeze(foodItems)
    foodItems.type='sdsdsd'
    console.log('After freeze',foodItems)
}

function nested(){
    var arr3=[]
    arr3.push(arr,arr2)
    console.log(arr3)
}