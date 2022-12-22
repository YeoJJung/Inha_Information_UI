//선택한 시간 저장
const optionEls = document.getElementById("time"); //"option"?
var time;
const timeClickEvent = () =>{
    time = optionEls.options[optionEls.selectedIndex].value;
    //alert(time); //확인용
}
optionEls.addEventListener("onchange", timeClickEvent);

//const setTimetable = 