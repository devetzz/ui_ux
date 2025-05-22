// onLoad() : 전체 document가 메모리에 모두 로드 되었을 때 함수 호출
function onLoad(){

    // 회전목마 시작
    // 1. 객체 찾기
    const rotation = document.querySelector("#rotation");                 //회전목마 전체레이아웃
    const imgList = document.querySelectorAll("#slide_show img");       //회전목마 이미지 배열 리스트 노드
    const navLeft = document.querySelector("#navigateleft");            //회전목마 왼쪽 화살표
    const navRight = document.querySelector("#navigateright");          //회전목마 오른쪽 화살표
    const indicatorList = document.querySelectorAll("#indicator > a");  //회전목마 indicator a

    // 2. 객체()
    // 함수 : 시간에 따라서 이미지1, 인디케이터1이 선택 되어 화면에 보여줘야 한다.
    let list = [1, 0, 0, 0];
    let timerId;            // 타이머 핸들
    function listArray(){
        for(let  i = 0; i < list.length; i++){
            imgList[i].style.zIndex = list[i];
        }
        for(let  i = 0; i < indicatorList.length; i++){
            indicatorList[i].classList.remove('active');
        }
        let index = list.indexOf(1);
        indicatorList[index].classList.add('active');
    }
    listArray();

    // 왼쪽 화살표 클릭하면 왼쪽 이미지로 이동
    navLeft.addEventListener("click", () => {
        list.push(list.shift());
        listArray();
    });
    
    // 오른쪽 화살표 클릭하면 오른쪽 이미지로 이동
    navRight.addEventListener("click", () => {
        list.unshift(list.pop());
        listArray();
    });

    // 3초마다 navRight 수행
    function startTimer(){
        timerId = setInterval(()=>{
            list.unshift(list.pop());
            listArray();
        }, 3000);
    }
    startTimer();
    
    // rotation 영역에 마우스가 올라가면 타이머 정지
    rotation.addEventListener("mouseenter", ()=>{clearInterval(timerId)});

    // rotation 영역에 마우스가 빠져나가면 타이머 재시작
    rotation.addEventListener("mouseleave", ()=>{startTimer()});

    // indicator 클릭하면 해당되는 이미지 출력
    for(let i = 0 ;i < indicatorList.length ; i++){
        indicatorList[i].addEventListener("click", ()=>{
            list = [0, 0, 0, 0];
            list[i] = 1;
            listArray();
        });
    }
    // 회전목마 끝

    // 패턴 검색 시작
    // id 패턴검색을 진행할 이벤트 정의
    let idPattern = /^[\w]{3,12}$/;
    let idEmailPattern = /^@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    let pwPattern = /^[\w]{6,8}$/;
    let namePattern = /^[가-힣]{1,4}$/;

    let yearPattern = /^[0-9]{4}$/;
    let monthPattern = /^[0-9]{2}$/;
    let dayPattern = /^[0-9]{2}$/;


    let genderPattern = /^[남,여,m,f,M,F]{1}$/;
    let telPattern = /^01[016789]-\d{3,4}-\d{4}$/;
    let checkNumPattern = /^[0-9]{6}$/;

    let id = document.querySelector("#id");
    let idEmail = document.querySelector("#idEmail");
    let pw = document.querySelector("#pw");
    let pwCheck = document.querySelector("#pwCheck");
    let name = document.querySelector("#name");

    let year = document.querySelector("#year");
    let month = document.querySelector("#month");
    let day = document.querySelector("#day");
    
    let tel = document.querySelector("#tel");
    let checkNum = document.querySelector("#checkNum");
    let submit = document.querySelector("#submit");


    // 회원가입 전송 기능 점검
    join.addEventListener("click", function(){
        // id
        let idReturn = validate(id, idPattern, "아이디는 영문자, 숫자, _만 입력 가능. 최소 3자이상 12자이하 입력하세요.");
        if(idReturn === false) return;
        let idEmailReturn = validate(idEmail, idEmailPattern, "@naver.com 등의 형식을 입력하세요.");
        if(idEmailReturn === false) return;
        // pw
        let pwReturn = validate(pw, pwPattern, "암호는 영문자, 숫자, _만 입력 가능. 최소 6자이상 8자이하 입력하세요.");
        if(pwReturn === false) return;
        let pwCheckReturn = (pw.value === pwCheck.value) ? true : false;
        if(pwCheckReturn === false){
            alert("패스워드 확인이 일치하지 않습니다.");
            pwCheck.value = "";
            pwCheck.focus();
            return;
        }

        let nameReturn = validate(name, namePattern, "이름을 입력하세요.");
        if(nameReturn === false) return;
        let yearReturn = validate(year, yearPattern, "생년을 입력하세요.");
        if(yearReturn === false) return;
        let monthReturn = validate(month, monthPattern, "월을 입력하세요.");
        if(monthReturn === false) return;
        let dayReturn = validate(day, dayPattern, "일을 입력하세요.");
        if(dayReturn === false) return;
        let genderReturn = validate(gender, genderPattern, "성별을 입력하세요.");
        if(genderReturn === false) return;

        let telReturn = validate(tel, telPattern, "휴대폰 번호를 입력하세요.");
        if(telReturn === false) return;
        let checkNumReturn = validate(checkNum, checkNumPattern, "인증 번호를 확인하세요.");
        if(checkNumReturn === false) return;
        
        alert('서버에 전송');

        let loginPage = document.querySelector(".login_wrap");
        let joinPage = document.querySelector(".inMain");

        loginPage.style.display = "flex";
        joinPage.style.display = "none";

    }); 

    // 공동으로 사용되는 함수
    function validate(inputObj, pattern, message){
        if(inputObj.value.match(pattern)){
            return true;
        }else{
            alert(message);
            inputObj.value = "";
            inputObj.focus();
            return false;
        }
    }

    

    // 패턴 검색 끝

    // 로그인 패턴 검색
    let btnLogin = document.querySelector("#btnLogin");

    btnLogin.addEventListener("click", ()=>{
        if(loginId.value.length < 4){
            warningText.innerHTML = "아이디는 4자 이상입니다.";
            warningText.style.color = "tomato";
            id.focus();
            return;
        }
        if(loginPw.value.length < 6){
            warningText.innerHTML = "암호는 6자 이상입니다.";
            warningText.style.color = "tomato";
            pw.focus();
            return;
        }
        alert('서버에 전송');
    });






}