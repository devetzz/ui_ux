// onLoad() : 전체 document가 메모리에 모두 로드 되었을 때 함수 호출
function onLoad(){
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
}