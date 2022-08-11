function form1(){
    var name = document.getElementById('input1').value;
    var email = document.getElementById('input2').value;
    var pwd = document.getElementById('input3').value;
    var letters =/^[A-Z][a-z]+\s[A-Z][a-z]+$/;
    var emailvalidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var pwdvalidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    var valid = true;
    if(name.match(letters)){
        document.getElementById('error1').innerHTML="";
    }
    else{
        document.getElementById('error1').innerHTML="username should contain first & last name with 1 letter capital";
        valid = false;
    }

    if(email.match(emailvalidation)){
        document.getElementById('error2').innerHTML="";
    }
    else{
        document.getElementById('error2').innerHTML="assign valid email";
        valid = false;
    }
    if(pwd.match(pwdvalidation)){
        document.getElementById('error3').innerHTML="";
    }
    else{
        document.getElementById('error3').innerHTML="pwd should contain 1 special character 1 Capital letter and min length should be 8 ";
        valid = false;
    } 
    if(valid==true){
        document.getElementById('message').innerHTML="login Successful";
        document.getElementById('input1').value="";
        document.getElementById('input2').value="";
        document.getElementById('input3').value="";
    }      
}