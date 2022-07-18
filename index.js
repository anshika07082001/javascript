function decrement()
{
 document.getElementById('counter').innerHTML-=1;   
}
function increment()
{
//  parseInt ( document.getElementById('counter').innerHTML);
//  var num= parseInt( document.getElementById('counter').innerHTML);
//  num=num+1;
//  document.getElementById('counter').innerHTML=num;
var num =document.getElementById('counter').innerHTML;
    num++;
    document.getElementById('counter').innerHTML=num;
}
