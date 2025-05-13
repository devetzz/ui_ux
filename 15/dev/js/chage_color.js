// 1. 객체를 찾는다. Student Stu = new Student(); => 객체 배열 => Collection Framework
// document (화면에 있는 모든 UI 객체를 다 가지고 있다.) => 어떻게 찾을건데 (css 선택자 기능을 가지고 찾는다.)
// 한개만 찾고 싶으면 id 줘야된다. class 이름으로 찾으면 => 객체 참조배열 [첨자] 반복문
let h1obj = document.querySelector("#heading");

// 2. 객체를 마음대로 설정(기본 속성, style 속성, event 속성:on , content)
h1obj.onclick = () => {
    h1obj.style.color = "#ff0000";
    window.alert("H1을 클릭하셨습니다.");
};