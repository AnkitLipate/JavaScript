//validate usaername is empty or not
function validatusername(){
    uname = document.getElementById("uname").value;
    if(uname.trim().length == 0){
        document.getElementById("unameerr").innerHTML = "user name is mandatory";
        return false;
    }
    else{
        document.getElementById("unameerr").innerHTML = "";
        return true;
    }
}
//validate password is empty or not
function validatepassword(){
    pass = document.getElementById("pass").value;
    if(pass.trim().length == 0){
        document.getElementById("passerr").innerHTML = "password is mandatory";
        return false;
    }
    else{
        document.getElementById("passerr").innerHTML = "";
        return true
    }
}
//validate data
function validatedata(){
    flag = validatusername();
    flag1 = validatepassword();
    if(flag && flag1){
        return true;
    }
    else{
        return false;
    }
}
function showpass(){
    pass = document.getElementById("pass"); 
    if(document.getElementById("show").checked){
        pass.setAttribute("type", "text")
    }
    else{
        pass.setAttribute("type", "password")
    }
}