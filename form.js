const btn = document.querySelector('.btn')
let valTen = document.querySelector('.name');
let valAddress = document.querySelector('.address')
let valPhone = document.querySelector('.phone')
let output = document.querySelector('.alert');

const kyTuDacBiet = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const so = /\d/g ;
const chuoi = /[a-zA-Z]/


btn.addEventListener('click',e=>{
    output.innerHTML = ""

    // Kiem tra rong
    if(valTen.value===""){
        getRed()
        output.innerHTML += "Chưa nhập họ và tên </br>"
    }
    if(valAddress.value===""){
        getRed()
        output.innerHTML += "Chưa nhập địa chỉ </br>"
    }
    if(valPhone.value===""){
        getRed()
        output.innerHTML += "Chưa nhập số điện thoại </br>"
    }
   

    // Kiem tra hop le (Regex)
    if(kyTuDacBiet.test(valTen.value)===true||so.test(valTen.value)===true){
        getRed();
        output.innerHTML += "Nhập tên không hợp lệ </br>";
    }

    if(kyTuDacBiet.test(valAddress.value)===true){
        getRed();
        output.innerHTML += "Nhập địa chỉ không hợp lệ</br>";
    }

    if(chuoi.test(valPhone.value)===true){
        getRed();
        output.innerHTML += "Nhập số điện thoại không hợp lệ </br>";
    }




    if(output.innerHTML===""){
        getSucess();
        output.innerHTML = "Đăng ký thành công";
        window.location.href="Explore/generate.html"
    }

})

function getRed(){
    document.querySelector('.alert').style.color="red";
}

function getSucess(){
    output.style.color = "green";
}


