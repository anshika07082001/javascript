const arr=[]; 
function product(){
console.log(document.getElementById('input1').value);
console.log(document.getElementById('input2').value);
console.log(document.getElementById('input3').value);

id=document.getElementById('input1').value;
Name= document.getElementById('input2').value;
price = document.getElementById('input3').value;

document.getElementById('input1').value='';
document.getElementById('input2').value=" ";
document.getElementById('input3').value='';


arr.push({productid:id, productname:Name, productprice:price});
    


console.log(arr);
var text="<table><tr><th>Product Id</th><th>Product Name</th><th>Product Price</th></tr>";
for (a=0;a<arr.length;a++)
{
text+="<tr><td>"+arr[a].productid+"</td><td>"+arr[a].productname+"</td><td>"+arr[a].productprice+"</td></tr>";
}
text+="</table>"; 
document.getElementById('divTable').innerHTML=text;
}