function onLoad(){
    let id = document.querySelector("#id");
    let pw = document.querySelector("#pw");
    let warningText = document.querySelector("#warningText");
    let btnLogin = document.querySelector("#btnLogin");

    id.addEventListener("blur", ()=>{
        if(id.value.length === 0){
            warningText.innerHTML = "아이디를 입력해주세요.";
            warningText.style.color = "tomato";
            id.focus();
        }
    });
    
    pw.addEventListener("blur", ()=>{
        if(pw.value.length === 0){
            warningText.innerHTML = "암호를 입력해주세요.";
            warningText.style.color = "tomato";
            pw.focus();
        }
    });

    btnLogin.addEventListener("click", ()=>{
        if(id.value.length < 4){
            warningText.innerHTML = "아이디는 4자 이상입니다.";
            warningText.style.color = "tomato";
            id.focus();
            return;
        }
        if(pw.value.length < 6){
            warningText.innerHTML = "암호는 6자 이상입니다.";
            warningText.style.color = "tomato";
            pw.focus();
            return;
        }
        alert('서버에 전송');
    });
}