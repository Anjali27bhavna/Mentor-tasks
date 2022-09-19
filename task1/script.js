let shoppingCart=document.querySelector('.shopping-cart');
document.querySelector('#card-btn').onclick=()=>{
    shoppingCart.classList.toggle('active');
}

let profilelog=document.querySelector('.prolog');
document.querySelector('#log-btn').onclick=()=>{
    profilelog.classList.toggle('active');
}

function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="user")
    {
        alert("login success");
        return false
    }
    else{
        alert("login failed");
    }   

}