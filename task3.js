

function validateform(){
    var valid = true;
    var namev = document.getElementById('i1').value;
    var emailv = document.getElementById('i2').value;
    var phonev = document.getElementById('i3').value;
    var addressv = document.getElementById('i5').value;
    var postv = document.getElementById('i4').value;
    var product1 = document.getElementById('i7').value;
    var product2 = document.getElementById('i8').value;
    var product3 = document.getElementById('i9').value;



    var letters = /^([A-Z][^\s]*)/;
    var namev = document.getElementById('i1').value;
    if(namev.match(letters)){
        document.getElementById('error').innerHTML="";
    }
    else{
        document.getElementById('error').innerHTML="Define valid name";
        valid = false;
    }

    var sletters =/^\w+([ \.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var emailv = document.getElementById('i2').value;
    if(emailv.match(sletters)){
        document.getElementById('error2').innerHTML="";
        
    }
    else{
        document.getElementById('error2').innerHTML ="Define valid email";
        valid = false;
    }
    var phonenum =/^\d{10}$/;
    var phonev = document.getElementById('i3').value;
    if(phonev.match(phonenum)){
        document.getElementById('error3').innerHTML="";
        
    }
    else{
        document.getElementById('error3').innerHTML="Number should be of 10 digit";
        valid = false;
    
    }
    var postcode =/^\d{6}$/;
    var postv = document.getElementById('i4').value;
    if(postv.match(postcode)){
        document.getElementById('error4').innerHTML="";
    
    }
    else{
        document.getElementById('error4').innerHTML="code should be of 6 digit";
        valid = false;
    }
    
    if(valid==true){
           
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

    document.getElementById('invoice').style.display="block";
        }
}
