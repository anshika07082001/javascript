function Age(){
document.getElementById('Age').value;
document.getElementById('Weight').value;

var age=document.getElementById('Age').value;
var weight=document.getElementById('Weight').value;
if(age>=5 && age<=7){
    if(weight>=15 && weight<=20)
    {
        document.getElementById('p1').innerHTML="Keep it Up!"
    }
    else if(weight>=20)
    {
        document.getElementById('p1').innerHTML="You are Overweight!"
    }
    else {
        document.getElementById('p1').innerHTML="Underweight!"
    }
    
}
if(age >=8 && age<=10){
    if(weight>=21 && weight<=25){
        document.getElementById('p1').innerHTML="Keep it up!"
    }
    else if(weight>25){
        document.getElementById('p1').innerHTML="You are Overweight!"
    }
    else{
        document.getElementById('p1').innerHTML="Underweight!"
    }
}

if(age>=11 && age<=15){
    if(weight>=26 && weight<=30)
    {
        document.getElementById('p1').innerHTML="Keep it up!"
    }
    else if(weight>30){
        document.getElementById('p1').innerHTML="You are Overweight!"
    }
    else{
        document.getElementById('p1').innerHTML="Underweight!"
    }
}

if(age>=16 && age<=20){
    if(weight>=31 && weight<=40){
        document.getElementById('p1').innerHTML="Keep it up!"
    }
    else if(weight>40){
        document.getElementById('p1').innerHTML="You are Overweight!"
    }
    else{
        document.getElementById('p1').innerHTML="Underweight!"
    }
}
}