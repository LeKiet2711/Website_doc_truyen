
function login(e){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var user=localStorage.getItem(email);
    var data=JSON.parse(user);
    if(email==data.email && password==data.password){
        alert("đăng nhập thành công !");
        window.location.href="index.html";
        return false;
    }else{
        alert("Tài khoản không tồn tại !");
    }
}