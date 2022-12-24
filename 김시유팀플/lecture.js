var time;
var date;
var dayOfWeek;

// <선택한 날짜가 주말인지 아닌지 판정하는 함수>
function getDayOfWeek(date){ 
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    dayOfWeek = week[new Date(date).getDay()];
    //원본은 const형 변수로 받았음 
    return dayOfWeek;

}
// <초기 날짜 세팅: 오늘 날짜로>
document.getElementById("checkedDate").valueAsDate = new Date();

// <선택한 시간 저장>
const timeOptionEls = document.getElementById("time"); 
const timeClickEvent = () =>{
    time = timeOptionEls.options[timeOptionEls.selectedIndex].value;
}
timeOptionEls.addEventListener("onchange", timeClickEvent);

// <선택한 날짜 저장>
const dateOptionEl = document.getElementById("checkedDate");
const dateClickEvent = () =>{
    date = dateOptionEl.value;

    //만약 주말을 선택했다면 정보가 없다는 알림을 띄움
    if(getDayOfWeek(date) ==="토" || getDayOfWeek(date) ==="일" ){
        alert("정보가 존재하지 않습니다.");
    }
}

// <timetable 디폴트 설정: 보이지 않음> 
document.getElementById("timetable").style.display = 'none';

// <난수를 생성하는 함수: 난수의 배수인 교시를 사용 처리함>
function setRandom(){
    var random = Math.floor(Math.random()*7);
    return random;
}

//<조회 버튼 눌렀을 때 강의실 정보 표시>
function setTimetable(){
    var time = timeOptionEls.options[timeOptionEls.selectedIndex].value;
    var date = dateOptionEl.value;
    var random = setRandom();

    var target = document.getElementById("timetableList");
        var li = target.getElementsByTagName("li");
        for(var i = 0; i<li.length; i++){
            if((i+1) % random === 0){
                li[i].innerText = `60주년 - 0${i+1} 강의실 ${time}교시 사용 (${date})`;
            }else{
                li[i].innerText = `60주년 - 0${i+1} 강의실 ${time}교시 미사용 (${date})`;
            }
        }
    //설정 이후 화면에 보이게
    document.getElementById("timetable").style.display = "block"; 
}