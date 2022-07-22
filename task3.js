var flag=0;
function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    sentence.join(" ");
    return sentence;
}
function validateform(){

    var namev = document.getElementById('i1').value;
    var emailv = document.getElementById('i2').value;
    var phonev = document.getElementById('i3').value;
    var addressv = document.getElementById('i5').value;
    var postv = document.getElementById('i4').value;
    var product1 = document.getElementById('i7').value;
    var product2 = document.getElementById('i8').value;
    var product3 = document.getElementById('i9').value;


   
    var namev = document.getElementById('i1').value;
    var arr=[];
  
    if(titleCase(namev)==namev){
        document.getElementById('error').innerHTML="";
    }
    else{
        document.getElementById('error').innerHTML="Define valid username";
        return false;
    }
    

    var sletters =/^\w+([ \.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var emailv = document.getElementById('i2').value;
    console.log(arr);
    if(emailv.match(sletters)){
        document.getElementById('error2').innerHTML="";
        
    }
    else{
        document.getElementById('error2').innerHTML ="Define valid email";
        return false;
    }
    var phonenum =/^\d{10}$/;
    var phonev = document.getElementById('i3').value;
    if(phonev.match(phonenum)){
        document.getElementById('error3').innerHTML="";
    
    }
    else{
        document.getElementById('error3').innerHTML="Number should be of 10 digit";
        return false;
    }
    var postcode =/^\d{6}$/;
    var postv = document.getElementById('i4').value;
    if(postv.match(postcode)){
        document.getElementById('error4').innerHTML="";
    
    }
    else{
        document.getElementById('error4').innerHTML="code should be of 6 digit";
        return false;
    }
   
    const orders= [{name:namev,email:emailv,phone:phonev,address:addressv,produc1:product1,produc2:product2,produc3:product3}];

    document.getElementById('namea').innerHTML=orders[0].name;

    document.getElementById('emaila').innerHTML=orders[0].email;
    document.getElementById('phonea').innerHTML=orders[0].phone;
    document.getElementById('deliverya').innerHTML=orders[0].address;


    document.getElementById('p1a').innerHTML=orders[0].produc1;
    document.getElementById('p2a').innerHTML=orders[0].produc2;
    document.getElementById('p3a').innerHTML=orders[0].produc3;


    var p1 = document.getElementById('p1a').innerHTML;
    ansp1=p1*10;
    document.getElementById('ap1a').innerHTML=ansp1;
    var p2 = document.getElementById('p2a').innerHTML;
    ansp2=p2*20;
    document.getElementById('ap2a').innerHTML=ansp2;
    var p3 = document.getElementById('p3a').innerHTML;
    ansp3=p3*30;
    document.getElementById('ap3a').innerHTML=ansp3;
    
    anstotal = ansp1+ansp2+ansp3+20;
    document.getElementById('totala').innerHTML=anstotal;

    taxtotal = anstotal*13/100;
    document.getElementById('taxesa').innerHTML=taxtotal;

    overallTotal = anstotal+taxtotal;
    document.getElementById('totalla').innerHTML=overallTotal;
// console.log(document.getElementById('invoice').style.display);
 




    // if(document.getElementById('invoice').style.display=="none")
    
        document.getElementById('invoice').style.display="block";
    

        // document.getElementById('invoice').style.display="block";
        return true;



}



