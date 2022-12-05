 function validation(){
    //alert("hello");
    var password = document.getElementById('my-id')
    var error= document.getElementById('error')
    var flag =true;
    if(password.value.trim()==""){
        // alert('blank password')
        password.style.border="dotted red"
        error.innerHTML ='***Enter Password'
        error.show()
        flag=false
    }else if(password.value.trim()!=""){
        password.style.border=""
    }
    if( password.value.length < 6){
        error.innerHTML ='***Password too short'
        error.show()
        flag = false;
    }
    else if(password.value.length >= 6){
        error.innerHTML = 'good password'
        flag = true;
    }
   
    // alert(flag);
    return flag // to maintain state of flag

}

function signIn(){
    var validate = validation();
    if(validate == true) {
        window.location.href = "menu.html";
    }
}
