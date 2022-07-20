const arr=[
    {productname:"iphone",productid:"17732",productprice:"34889",productavail:"true"},
    {productname:"windows",productid:"212819",productprice:"74347",productavail:"false"},
    {productname:"nokia",productid:"263273",productprice:"763742",productavail:"true"},
    {productname:"redme",productid:"873483",productprice:"73472",productavail:"false"}
];




function update(args){
var text="<table><tr><th>Product Name</th><th>Product Id</th><th>Product Price</th><th>Product availability</th></tr>";
for(i=0;i<arr.length;i++) 
{
    if(arr[i].productname==args)
    {
        text+="<tr><td>"+arr[i].productname+"</td><td>"+arr[i].productid+"</td><td>"+
        arr[i].productprice+"</td><td>"+arr[i].productavail+"</td></tr>";
        text +="</table>";
        document.getElementById('product').innerHTML=text;   
    }    
}
}

